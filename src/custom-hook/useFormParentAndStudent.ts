import { usePostParentAndStudent } from "@/hooks/use-wali-kelas";
import { useAuth } from "@/store/userStore";
import { FormValues } from "@/utils/form-props";
import { useForm } from "react-hook-form";

export const useFormParentAndStudent = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    mode: "onChange",
  });
  const classname = useAuth((v) => v.user?.teacher?.className);
  const { mutateAsync, isLoading } = usePostParentAndStudent(classname ?? "");

  const onSubmit = handleSubmit(async (e) => {
    try {
      const toMutate = { ...e, classname };
      await mutateAsync(toMutate);
    } catch (e) {
      console.error(e);
    }
  });

  return {
    control,
    onSubmit,
    isLoading,
  };
};
