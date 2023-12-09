import useUserStore from "@/store/userStore";
import { toast } from "react-toastify";
import { useGeneralStore } from "@/store/generalStore";
import { usePatchStudentClass } from "@/hooks/use-wali-kelas";

export const useGradeIncrement = () => {
  const { selectedClass } = useUserStore();
  const { dataId } = useGeneralStore();

  const patch = usePatchStudentClass(dataId);

  const onUpClass = async () => {
    if (selectedClass === "Pilih kelas" || !selectedClass) {
      toast.info(selectedClass);
      return;
    }

    const toMutate = {
      classname: selectedClass,
      userId: dataId,
    };

    await patch.mutateAsync(toMutate);
  };

  return { onUpClass };
};
