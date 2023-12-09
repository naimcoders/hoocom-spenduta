import { usePasswordHook } from "@/custom-hook/useProfile";
import { useChangePassword, useValidatePassword } from "@/hooks/use-profile";
import { TBodyChangePassword, TBodyPassword } from "@/types/componentTypes";
import { auth, signOut } from "@/configs/firebase";
import { useAuth } from "@/store/userStore";
import { useNavigate } from "react-router-dom";

export const SubmitProfile = () => {
  const { actionFirstModal, actionSecondModal, handleSubmit, control } =
    usePasswordHook();
  const user = useAuth((v) => v.user);
  const validate = useValidatePassword();
  const id = user?.id ?? "";

  const onSubmitCheckPassword = handleSubmit(async (e) => {
    try {
      const bodyCheckPassword: TBodyPassword = {
        userId: id,
        password: e.password,
      };

      await validate.mutateAsync(bodyCheckPassword);
      actionFirstModal();

      setTimeout(actionSecondModal, 1100);
    } catch (error) {
      console.error(error);
    }
  });

  const changed = useChangePassword();

  const onSubmitChangePassword = handleSubmit(async (e) => {
    try {
      const toMutate: TBodyChangePassword = {
        userId: user?.id ?? "",
        password: e.password,
        confirmPassword: e.confirmPassword,
      };

      await changed.mutateAsync(toMutate);
    } catch (error) {
      console.error(error);
    }
  });

  const navigate = useNavigate();
  const userSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/masuk");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    onSubmitChangePassword,
    onSubmitCheckPassword,
    control,
    userSignOut,
  };
};
