import { FormValues } from "@/utils/form-props";
import { toast } from "react-toastify";
import { UseFormHandleSubmit, UseFormReset } from "react-hook-form";
import useUserStore from "@/store/userStore";
import { usePostEmployee } from "@/hooks/use-admin";

type handleSubmit = UseFormHandleSubmit<FormValues, undefined>;
type reset = UseFormReset<FormValues>;

const SubmitEmployee = (handleSubmit: handleSubmit, reset: reset) => {
  const { accountType } = useUserStore();
  const { selectedClass } = useUserStore();
  const { mutateAsync, isLoading } = usePostEmployee();

  const onSubmit = handleSubmit(async (e) => {
    if (!accountType) {
      toast.info("Pilih jenis akun");
      return;
    }

    if (!selectedClass && accountType === "wali-kelas") {
      toast.info("Pilih kelas");
      return;
    }

    const newData = {
      ...e,
      role: accountType,
      className: selectedClass ?? "",
    };

    await mutateAsync(newData);
    reset();
  });

  return {
    onSubmit,
    isLoading,
  };
};

export default SubmitEmployee;
