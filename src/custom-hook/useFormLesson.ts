import { useDeleteLesson, usePostLesson } from "@/hooks/use-admin";
import { FormValues } from "@/utils/form-props";
import { useForm } from "react-hook-form";
import { useActiveModal } from "./useActiveModal";

export const useFormLesson = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    mode: "onChange",
  });
  const { isFirstModal, actionFirstModal } = useActiveModal();
  const posted = usePostLesson();

  const onSubmit = handleSubmit(async (e) => {
    try {
      await posted.mutateAsync(e);
    } catch (err) {
      console.error(err);
    } finally {
      reset();
    }
  });

  const deleted = useDeleteLesson();
  const onDeleteLesson = async (lesson: string) => {
    try {
      await deleted.mutateAsync({ lesson });
    } catch (err) {
      console.error(err);
    }
  };

  return {
    isFirstModal,
    actionFirstModal,
    control,
    onSubmit,
    onDeleteLesson,
  };
};
