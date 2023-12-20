export type TDataResponse<T> = {
  status: "success" | "error";
  code: number;
  message: string;
  data: T;
};

// API RESPONSE PARENTS AND STUDENTS
export type TDataParentAndStudent = {
  id: string;
  fullname: string;
  phone: string;
  email: string;
  role: string;
  period: string;
  parent: {
    id: string;
    userId: string;
  };
  student: {
    nis: string;
    classNameId: string;
    parentId: string;
    status: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type TResParentAndStudent = {
  code: number;
  status: string;
  message: string;
  data: TDataParentAndStudent[];
};
