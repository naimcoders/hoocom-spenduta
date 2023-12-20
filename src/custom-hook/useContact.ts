import { usePostMessageToDeveloperEmail } from "@/hooks/use-admin";
import { FormValues } from "@/utils/form-props";
import { useForm } from "react-hook-form";

export const useContact = () => {
  const { control, handleSubmit } = useForm<FormValues>({ mode: "onChange" });
  const { mutateAsync, isLoading } = usePostMessageToDeveloperEmail();

  const onSubmit = handleSubmit(async (e) => {
    try {
      await mutateAsync(e);
    } catch (error) {
      console.error(error);
    }
  });

  return { control, onSubmit, isLoading };
};
