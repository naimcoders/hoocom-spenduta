import { useActiveModal } from "@/custom-hook/useActiveModal";
import { useGeneralStore } from "@/store/generalStore";
import { TSingleId } from "@/types/componentTypes";

const CardActionsGI = ({ id }: TSingleId) => {
  const { actionFirstModal } = useActiveModal();
  const { setDataId } = useGeneralStore();

  return (
    <section className="grid grid-cols-2 gap-4">
      <button
        className="text-white capitalize py-2 rounded-lg bg-secondary text-14px none-highlight"
        onClick={() => {
          setDataId(id);
          actionFirstModal();
        }}
      >
        naik kelas
      </button>
      <button className="text-white capitalize py-2 rounded-lg bg-red-500 text-14px none-highlight">
        tinggal kelas
      </button>
    </section>
  );
};

export default CardActionsGI;
