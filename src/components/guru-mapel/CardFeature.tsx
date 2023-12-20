import { toast } from "react-toastify";
import { useGeneralStore } from "@/store/generalStore";
import { useNavigate } from "react-router-dom";

type TCardDataUser = {
  id: number;
  title: string;
  link: string;
};

const condition = (
  classname: string | undefined,
  lesson: string | undefined
): string => {
  let str = "";

  if (!classname && !lesson) {
    str = "Pastikan untuk memilih kelas dan mapel.";
  } else if (!classname) {
    str = "Pastikan untuk memilih kelas.";
  } else if (!lesson) {
    str = "Pastikan untuk memilih mapel.";
  }

  return str;
};

export const useCardFeatureGuruMapel = () => {
  const navigate = useNavigate();
  const { selectedLesson, selectedClass } = useGeneralStore();

  const handleButton = (link: string) => {
    const isChecked = condition(selectedClass, selectedLesson);
    if (isChecked) {
      toast.info(isChecked);
      return;
    }

    const path = `${link}/${selectedClass}/${selectedLesson}`;
    navigate(path);
  };

  return { handleButton };
};

export const cardFeatureGuruMapel: TCardDataUser[] = [
  {
    id: 1,
    title: "presensi",
    link: "/guru-mapel/presensi",
  },
  { id: 2, title: "penilaian", link: "/guru-mapel/penilaian" },
];

const CommandHeader = () => {
  return (
    <section className="flex flex-col gap-4">
      <p className="text-[#4D4D4D] text-12px">
        *Jika tidak terdapat pilihan kelas ataupun mata pelajaran, silakan
        hubungi operator.
      </p>
      <p className="text-[#4D4D4D] text-12px">
        *Pastikan terlebih dahulu untuk memilih kelas dan mata pelajaran sebelum
        memulai presensi atau penilaian.
      </p>
    </section>
  );
};

const CardFeature = () => {
  const { handleButton } = useCardFeatureGuruMapel();

  return (
    <section className="px-5 851px:px-56">
      <CommandHeader />

      <section className="py-4 grid grid-cols-auto-fit gap-4">
        {cardFeatureGuruMapel.map((feature) => (
          <section
            className="p-5 flex flex-col gap-4 rounded-2xl items-center bg-white"
            key={feature.id}
          >
            <h2 className="capitalize font-lexendMedium text-18px">
              {feature.title}
            </h2>
            <button
              className="capitalize text-secondary rounded-lg p-2 w-max text-[14px] none-highlight"
              onClick={() => handleButton(feature.link)}
            >
              mulai
            </button>
          </section>
        ))}
      </section>
    </section>
  );
};

export default CardFeature;
