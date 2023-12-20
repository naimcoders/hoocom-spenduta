import { requestHandler } from "@/types/commonTypes";
import {
  TBodyChangePassword,
  TBodyPassword,
  TBodyProfile,
  TSingleId,
} from "@/types/componentTypes";
import { uriProfile } from "./user-api";

const uriValidate = `${uriProfile}/validate-password`;
const uriChangePassword = `${uriProfile}/change-password`;

export const editPhotoProfile = (url: string, data: TBodyProfile) =>
  requestHandler<null, TBodyProfile>({
    url,
    method: "PATCH",
    data,
  });

export const validate = (data: TBodyPassword) =>
  requestHandler<TSingleId, TBodyPassword>({
    url: uriValidate,
    method: "POST",
    data,
  });

export const changePassword = (data: TBodyChangePassword) =>
  requestHandler<TSingleId, TBodyChangePassword>({
    url: uriChangePassword,
    method: "PATCH",
    data,
  });
