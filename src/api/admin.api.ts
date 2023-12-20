import { uriEmployees, uriGeneralData, uriLessons } from "@/api/admin-api";
import { TPresences } from "@/store/generalStore";
import { TBaseUser, requestHandler } from "@/types/commonTypes";
import {
  TBobot,
  TBodyContactMessage,
  TGeneralData,
  TGetTeacherByLesson,
  TPatchEmployee,
  TPostTeacherLesson,
  TSingleClassName,
  TSingleClassname,
  TSingleId,
  TSingleLesson,
  TUserIdAndRole,
  TValuePrecences,
} from "@/types/componentTypes";

export const postMessageToDeveloperEmail = (
  url: string,
  data: TBodyContactMessage
) => requestHandler<null, TBodyContactMessage>({ url, method: "POST", data });

export const getClassnames = (url: string) =>
  requestHandler<TSingleClassName[]>({ url, method: "GET" });

export const generalDataAPI = () =>
  requestHandler<TGeneralData>({ url: uriGeneralData, method: "GET" });

export const getEmployeesAPI = (url: string) =>
  requestHandler<TBaseUser[]>({ url, method: "GET" });

export const postEmployeeAPI = (url: string, data: TPatchEmployee) =>
  requestHandler<null, TPatchEmployee>({ url, method: "POST", data });

export const patchEmployeeById = (url: string, data: TPatchEmployee) =>
  requestHandler<null, TPatchEmployee>({ url, method: "PATCH", data });

export const deleteEmployeeByIdAPI = (data: TUserIdAndRole) => {
  const { userId, role } = data;
  const url = `${uriEmployees}/${role}/${userId}`;
  return requestHandler<null, TUserIdAndRole>({ url, method: "DELETE", data });
};

export const countTeacherByLessonAPI = (data: TSingleLesson) => {
  const { lesson } = data;
  const url = `${uriLessons}/${lesson}`;
  return requestHandler<null, TSingleLesson>({ url, method: "POST", data });
};

export const getClassnameFromPost = (url: string, data: TSingleClassname) =>
  requestHandler<TSingleClassName, TSingleClassname>({
    url,
    method: "POST",
    data,
  });

export const postClassname = (url: string, data: TSingleClassname) =>
  requestHandler<TSingleClassName, TSingleClassname>({
    url,
    method: "POST",
    data,
  });

export const postLesson = (url: string, data: TSingleLesson) =>
  requestHandler<null, TSingleLesson>({
    url,
    method: "POST",
    data,
  });

export const getLessons = (url: string) =>
  requestHandler<TSingleLesson[]>({ url, method: "GET" });

export const getTeacherLessons = (url: string) =>
  requestHandler<TBaseUser[]>({ url, method: "GET" });

export const getTeacherByLesson = (url: string) =>
  requestHandler<TGetTeacherByLesson[]>({ url, method: "GET" });

export const postTeacherLesson = (url: string, data: TPostTeacherLesson) =>
  requestHandler<null, TPostTeacherLesson>({ url, method: "POST", data });

export const deleteTeacherLessonById = (url: string, data: TSingleId) =>
  requestHandler<null, TSingleId>({ url, method: "DELETE", data });

export const getPresenceDate = (url: string) =>
  requestHandler<boolean>({ url, method: "GET" });

export const postPresences = (url: string, data: TPresences[]) =>
  requestHandler<TValuePrecences, TPresences[]>({
    url,
    method: "POST",
    data,
  });

export const patchBobot = (url: string, data: TBobot) =>
  requestHandler<null, TBobot>({ url, method: "PATCH", data });
