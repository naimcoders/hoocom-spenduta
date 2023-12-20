import { useGetPhoneNumber } from "@/hooks/use-wali-kelas";
import { ERole } from "@/types/commonTypes";
import { FormValues } from "@/utils/form-props";
import { useForm } from "react-hook-form";

export const useFormPhoneNumber = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    mode: "onChange",
  });
  const { mutateAsync } = useGetPhoneNumber(ERole.ORANG_TUA_SISWA);

  const onSubmit = handleSubmit(async (e) => {
    try {
      await mutateAsync(e);
    } catch (err) {
      console.error(err);
    } finally {
      reset();
    }
  });

  return {
    control,
    onSubmit,
  };
};
