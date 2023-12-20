import { useActiveModal } from "@/custom-hook/useActiveModal";
import { useGradeIncrement } from "@/custom-hook/useGradeIncrement";
import { useGeneralStore } from "@/store/generalStore";
import { TSingleId } from "@/types/componentTypes";

type TButton = {
  label: "naik kelas" | "tinggal kelas";
  bgColor: "bg-red-500" | "bg-blue-500";
  onClick: () => void;
};

const ButtonComponent = ({ label, onClick, bgColor }: TButton) => {
  return (
    <button
      className={`${bgColor} text-white capitalize py-2 rounded-lg text-14px none-highlight`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

type TProps = TSingleId & {
  parentId: string;
};

const CardActionsGI = ({ id, parentId }: TProps) => {
  const { actionFirstModal } = useActiveModal();
  const { setTwoDatas } = useGeneralStore();
  const { onDownClass } = useGradeIncrement();

  return (
    <section className="grid grid-cols-2 gap-4">
      <ButtonComponent
        label="naik kelas"
        bgColor="bg-blue-500"
        onClick={() => {
          setTwoDatas({
            first: id,
            second: parentId,
          });
          actionFirstModal();
        }}
      />
      <ButtonComponent
        label="tinggal kelas"
        bgColor="bg-red-500"
        onClick={() => onDownClass(id, parentId)}
      />
    </section>
  );
};

export default CardActionsGI;
