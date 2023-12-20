import { useActiveModal } from "@/custom-hook/useActiveModal";
import { useTeacherLessonData } from "@/custom-hook/useTeacherLessonData";
import { PlusSmallIcon } from "@heroicons/react/24/outline";

type HeaderCreateDataProps = {
  title: string;
  labelBtn: string;
  titleOption?: string;
};

export const HeaderCreateData = ({
  title,
  labelBtn,
  titleOption,
}: HeaderCreateDataProps) => {
  const { actionFirstModal } = useActiveModal();
  const teacherLesson = useTeacherLessonData();

  return (
    <header className="p-5 mb-2 flex items-center justify-between 851px:px-56">
      <h1 className="capitalize font-lexendSemiBold text-15px">{title}</h1>
      <button
        className="none-highlight bg-secondary text-primary py-2 px-3 rounded-lg text-[14px] outline-none first-letter:capitalize inline-flex gap-1 items-center"
        onClick={
          title === "data kelas"
            ? actionFirstModal
            : title === "mata pelajaran"
            ? actionFirstModal
            : title === "data pegawai"
            ? actionFirstModal
            : title === "murid & ortu"
            ? actionFirstModal
            : titleOption === "teacher lesson"
            ? teacherLesson.modalAction
            : undefined
        }
      >
        <PlusSmallIcon className="w-5 h-5" />
        {labelBtn}
      </button>
    </header>
  );
};
