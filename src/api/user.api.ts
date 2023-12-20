import {
  TBaseParentAndStudent,
  TBaseUser,
  requestHandler,
} from "@/types/commonTypes";
import {
  TBodyGradeIncrement,
  TDeleteStudentParent,
  TGetTeacherLesson,
  TPostParentAndStudent,
  TPostStudent,
  TSingleId,
  TSinglePhone,
} from "@/types/componentTypes";
import { uriDeleteStudentAndParent } from "./wali-kelas-api";

export const getUserById = (url: string) =>
  requestHandler<TBaseUser>({ url, method: "GET" });

export const getStudentByClass = (url: string) =>
  requestHandler<TBaseParentAndStudent[]>({ url, method: "GET" });

export const patchStudentClass = (url: string, data: TBodyGradeIncrement) =>
  requestHandler<null, TBodyGradeIncrement>({ url, method: "PATCH", data });

export const getParentById = (url: string) =>
  requestHandler<TBaseParentAndStudent>({ url, method: "GET" });

export const postParentAndStudent = (
  url: string,
  data: TPostParentAndStudent
) => requestHandler<null, TPostParentAndStudent>({ url, method: "POST", data });

export const getPhoneNumberByRole = (url: string, data: TSinglePhone) =>
  requestHandler<TSingleId, TSinglePhone>({ url, method: "POST", data });

export const postStudent = (url: string, data: TPostStudent) =>
  requestHandler<null, TPostStudent>({ url, method: "POST", data });
export const deleteStudentAndParent = ({
  studentId,
  parentId,
}: TDeleteStudentParent) => {
  const url = `${uriDeleteStudentAndParent}/${studentId}/${parentId}`;
  return requestHandler<null>({ url, method: "DELETE" });
};

export const getTeacherLessonById = (url: string) =>
  requestHandler<TGetTeacherLesson[]>({ url, method: "GET" });
