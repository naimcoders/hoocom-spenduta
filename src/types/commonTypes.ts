import axios, { AxiosError, AxiosRequestConfig } from "axios";

export enum ERole {
  WALI_KELAS = "WALI_KELAS",
  GURU_MAPEL = "GURU_MAPEL",
  ADMIN = "ADMIN",
  ORANG_TUA_SISWA = "ORANG_TUA_SISWA",
}

export type TUser = {
  id: string;
  fullname: string;
  phone: string;
  email: string;
  period: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  urlImage: string;
  imageName: string;
};

export type TBaseUser = TUser & {
  admin?: TAdminUser;
  teacher?: TTeacherUser;
  parent?: TParentUser;
  student?: TStudentUser;
};

type TAdminUser = {
  nip: string;
  status: string;
};

export type TTeacherUser = {
  nip: string;
  className: string;
};

type TParentUser = {
  id: string;
  userId: string;
};

type TStudentUser = {
  nis: string;
  classNameId: string;
  parentId: string;
  status: string;
};

export type TBaseTeacher = TUser & {
  admin: TAdminUser;
  teacher: TTeacherUser;
};

export type TBaseParentAndStudent = TUser & {
  parent: TParentUser;
  student: TStudentUser;
};

export type TFuncVoid = () => void;
export type TSemester = "1" | "2";

// === Response API ===
export type TBaseResponse<V> = {
  status: "success" | "error";
  message: string;
  code: number;
  data?: V;
};

export type TLabelAndOnClick<T> = {
  label: string;
  onClick: T;
};

type TMethodRequest = "GET" | "POST" | "PATCH" | "DELETE";

export type TRequestOptions<Body> = {
  url: string;
  method: TMethodRequest;
  data?: Body;
};

export type TClassAndLessonParam = {
  classname: string;
  lesson: string;
};

export const requestHandler = async <Value, Body = unknown>(
  props: TRequestOptions<Body>,
  config?: AxiosRequestConfig
): Promise<TBaseResponse<Value>> => {
  try {
    const response = await axios.request({
      ...props,
      ...config,
    });

    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const error = err as AxiosError<TBaseResponse<Value>>;
      const errorMessage =
        error.response?.data.message ?? "Terdapat kesalahan pada server";
      throw new Error(errorMessage);
    } else {
      throw new Error("Terdapat masalah saat mengirim permintaan");
    }
  }
};
