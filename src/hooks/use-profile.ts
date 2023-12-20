import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { TBaseResponse } from "@/types/commonTypes";
import {
  TBodyChangePassword,
  TBodyProfile,
  TSingleId,
} from "@/types/componentTypes";
import { reloadPage } from "@/utils/default-type";
import { usePasswordHook } from "@/custom-hook/useProfile";
import { changePassword, editPhotoProfile, validate } from "@/api/profile.api";
import { uriProfile } from "@/api/user-api";

export const usePatchPhotoProfile = (id: string) => {
  const URI = `${uriProfile}/photo/${id}`;
  const onError = (error: Error) => toast.error(error.message);
  const onSuccess = (success: TBaseResponse<null>) => {
    toast.success(success.message);
    setTimeout(reloadPage, 1100);
  };

  return useMutation({
    mutationKey: ["patch-photo-profile", id],
    mutationFn: (data: TBodyProfile) => editPhotoProfile(URI, data),
    onSuccess,
    onError,
  });
};

export const useChangePassword = () => {
  const { actionSecondModal } = usePasswordHook();
  const onError = (error: Error) => toast.error(error.message);
  const onSuccess = (success: TBaseResponse<TSingleId>) => {
    toast.success(success.message);
    actionSecondModal();
    setTimeout(reloadPage, 1800);
  };

  return useMutation<TBaseResponse<TSingleId>, Error, TBodyChangePassword>({
    mutationKey: ["change-password"],
    mutationFn: changePassword,
    onSuccess,
    onError,
  });
};

export const useValidatePassword = () => {
  const onError = (error: TBaseResponse<TSingleId>) =>
    toast.error(error.message);
  const onSuccess = (success: TBaseResponse<TSingleId>) =>
    toast.success(success.message);

  return useMutation({
    mutationKey: ["validate-password"],
    mutationFn: validate,
    onSuccess,
    onError,
  });
};
