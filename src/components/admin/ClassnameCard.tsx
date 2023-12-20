import caretRight from "@/assets/caret-right.svg";
import { TSingleClassName } from "@/types/componentTypes";
import { useClassname } from "@/custom-hook/useClassname";

type ClassNameCardProps = {
  title: string;
  classDatas: TSingleClassName[];
};

const ClassnameCard = ({ title, classDatas }: ClassNameCardProps) => {
  const { handlePushClass } = useClassname();
  return (
    <section className="px-5 851px:px-56">
      <h2 className="text-18px capitalize font-lexendMedium mb-4">{title}</h2>

      <section className="grid grid-cols-auto-fit-class-card gap-4">
        {classDatas?.map(({ className }) => (
          <div
            className="bg-white shadow-cardShadow flex justify-center gap-2 px-10 py-6 rounded-lg relative cursor-pointer none-highlight"
            title="Lihat data kelas"
            onClick={() => handlePushClass(className)}
            key={className}
          >
            <h3>{className}</h3>
            <img src={caretRight} alt="class" className="w-4" />
          </div>
        ))}
      </section>
    </section>
  );
};

export default ClassnameCard;
