import { toast } from "react-toastify";
import { SubmitHandler } from "react-hook-form";
import { FormValues } from "@/utils/form-props";
import usePostLogin from "@/hooks/use-post-login";
import useUserStore from "@/store/userStore";

type HandleSubmit = SubmitHandler<FormValues>;

const SubmitLogin = () => {
  const { accountType } = useUserStore();
  const { mutateAsync, isLoading } = usePostLogin();

  const onSubmit: HandleSubmit = async (data) => {
    if (!accountType) {
      toast.error("Pilih jenis akun untuk masuk");
      return;
    }

    const user = { ...data, accountType };
    await mutateAsync(user);
  };

  return {
    onSubmit,
    isLoading,
  };
};

export default SubmitLogin;
