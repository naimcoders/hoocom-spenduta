import { useAuth } from "@/store/userStore";
import { toast } from "react-toastify";
import { FormValues } from "@/utils/form-props";
import { useForm } from "react-hook-form";
import { useActiveModal } from "./useActiveModal";
import { useGeneralStore } from "@/store/generalStore";
import { usePostStudent } from "@/hooks/use-wali-kelas";
import { useGetUserById } from "@/hooks/use-admin";

export const useFormStudent = () => {
  const { control, handleSubmit } = useForm<FormValues>({ mode: "onChange" });
  const { isThirthModal, actionThirthModal } = useActiveModal();
  const parentId = useGeneralStore((v) => v.dataId);
  const classname = useAuth((v) => v.user?.teacher?.className);
  const getParentById = useGetUserById(parentId);
  const { mutateAsync } = usePostStudent(parentId, classname ?? "");

  const onSubmit = handleSubmit(async (e) => {
    if (!classname) {
      toast.error("Terdapat masalah saat penentuan kelas");
      return;
    }

    const data = { ...e, classname };
    await mutateAsync(data);
  });

  return {
    control,
    onSubmit,
    isThirthModal,
    actionThirthModal,
    getParentById,
  };
};
