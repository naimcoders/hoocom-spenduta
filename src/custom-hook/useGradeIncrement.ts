import useUserStore, { useAuth } from "@/store/userStore";
import { toast } from "react-toastify";
import { useGeneralStore } from "@/store/generalStore";
import { usePatchStudentClass } from "@/hooks/use-wali-kelas";
import { useActiveModal } from "./useActiveModal";

export const useGradeIncrement = () => {
  const { selectedClass } = useUserStore();
  const { twoDatas, clearTwoDatas } = useGeneralStore();
  const { first, second } = twoDatas;
  const { actionFirstModal } = useActiveModal();
  const period = useAuth((v) => v.user?.period) ?? "";
  const classname = useAuth((v) => v.user?.teacher?.className) ?? "";
  const patch = usePatchStudentClass(first, classname);

  const onUpClass = async () => {
    if (selectedClass === "Pilih kelas" || !selectedClass) {
      toast.info(selectedClass);
      return;
    }

    const toMutate = {
      userId: first,
      parentId: second,
      period,
      classname: selectedClass,
    };

    try {
      await patch.mutateAsync(toMutate);
      clearTwoDatas();
      actionFirstModal();
    } catch (err) {
      console.error(err);
    }
  };

  const onDownClass = async (userId: string, parentId: string) => {
    try {
      const toMutate = {
        userId,
        period,
        classname,
        parentId,
      };

      await patch.mutateAsync(toMutate);
    } catch (err) {
      console.error(err);
    }
  };

  return { onUpClass, onDownClass };
};
