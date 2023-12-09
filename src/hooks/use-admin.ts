import { toast } from "react-toastify";
import {
  uriClassName,
  uriEmployees,
  uriGetLessonTeacher,
  uriLessons,
} from "@/api/admin-api";
import {
  countTeacherByLessonAPI,
  deleteEmployeeByIdAPI,
  deleteTeacherLessonById,
  generalDataAPI,
  getClassnameFromPost,
  getClassnames,
  getEmployeesAPI,
  getLessons,
  getPresenceDate,
  getTeacherByLesson,
  getTeacherLessons,
  patchEmployeeById,
  postClassname,
  postEmployeeAPI,
  postLesson,
  postPresences,
  postTeacherLesson,
} from "@/api/admin.api";
import useUserStore from "@/store/userStore";
import { TBaseResponse } from "@/types/commonTypes";
import {
  TPatchEmployee,
  TPostTeacherLesson,
  TSingleClassName,
  TSingleClassname,
  TSingleId,
  TSingleLesson,
  TUserIdAndRole,
  TValuePrecences,
} from "@/types/componentTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { uriRegisterEmployee } from "@/api/auth-api";
import { useQueryClientHook } from "@/custom-hook/useQueryClient";
import { useActiveModal } from "@/custom-hook/useActiveModal";
import { uriGetUserById } from "@/api/user-api";
import { getTeacherLessonById, getUserById } from "@/api/user.api";
import { uriPresences, uriTeacherLessonByClass } from "@/api/guru-mapel";
import { TPresences } from "@/store/generalStore";

export const useGetUserById = (id: string) => {
  const URI = `${uriGetUserById}/${id}`;
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(URI),
    enabled: !!id,
  });
};

export const useGetGeneralData = () => {
  return useQuery({
    queryKey: ["general-data"],
    queryFn: generalDataAPI,
  });
};

export const useGetEmployees = () => {
  return useQuery({
    queryKey: ["employees"],
    queryFn: () => getEmployeesAPI(uriEmployees),
  });
};

export const usePostEmployee = () => {
  const { actionFirstModal } = useActiveModal();
  const { setAccountType, setEmployeeId, setSelectedClass } = useUserStore();
  const { refetchAfterMutation } = useQueryClientHook();

  const onError = (error: TBaseResponse<null>) => toast.error(error.message);
  const onSuccess = (success: TBaseResponse<null>) => {
    toast.success(success.message);
    actionFirstModal();
    setAccountType("");
    setSelectedClass();
    setEmployeeId({ id: "", role: "" });
    refetchAfterMutation(["employees"]);
  };

  return useMutation({
    mutationKey: ["employees"],
    mutationFn: (data: TPatchEmployee) =>
      postEmployeeAPI(uriRegisterEmployee, data),
    onError,
    onSuccess,
  });
};

export const usePatchEmployeeById = (id: string, role: string) => {
  const { refetchAfterMutation } = useQueryClientHook();
  const { actionThirthModal } = useActiveModal();
  const URI = `${uriEmployees}/${id}/${role}`;

  const onError = (error: TBaseResponse<null>) => toast.error(error.message);
  const onSuccess = (success: TBaseResponse<null>) => {
    toast.success(success.message);
    actionThirthModal();
    refetchAfterMutation(["employees"]);
  };

  return useMutation({
    mutationKey: ["employees", id, role],
    mutationFn: (data: TPatchEmployee) => patchEmployeeById(URI, data),
    onError,
    onSuccess,
  });
};

export const useDeleteEmployee = () => {
  const { refetchAfterMutation } = useQueryClientHook();

  const onError = (error: TBaseResponse<null>) => {
    toast.error(error.message);
  };

  const onSuccess = (success: TBaseResponse<null>) => {
    toast.success(success.message);
    refetchAfterMutation(["employees"]);
  };

  return useMutation({
    mutationKey: ["employees"],
    mutationFn: (data: TUserIdAndRole) => deleteEmployeeByIdAPI(data),
    onError,
    onSuccess,
  });
};

export const useDeleteLesson = () => {
  const { refetchAfterMutation } = useQueryClientHook();

  const onError = ({ message }: TBaseResponse<null>) => toast.error(message);
  const onSuccess = ({ message }: TBaseResponse<null>) => {
    toast.success(message);
    refetchAfterMutation(["lessons"]);
  };

  return useMutation({
    mutationKey: ["teacher-lesson"],
    mutationFn: (data: TSingleLesson) => countTeacherByLessonAPI(data),
    onError,
    onSuccess,
  });
};

export const useGetClassname = () => {
  const URI = uriClassName;
  return useQuery({
    queryKey: ["classnames"],
    queryFn: () => getClassnames(URI),
  });
};

export const useDeleteClassname = () => {
  const URI = `${uriClassName}/find`;
  const { refetchAfterMutation } = useQueryClientHook();

  const onError = (error: TBaseResponse<TSingleClassName>) => {
    toast.error(error.message);
  };

  const onSuccess = ({ message }: TBaseResponse<TSingleClassName>) => {
    toast.success(message);
    refetchAfterMutation(["classnames"]);
  };

  return useMutation({
    mutationKey: ["classname"],
    mutationFn: (data: TSingleClassname) => getClassnameFromPost(URI, data),
    onError,
    onSuccess,
  });
};

export const usePostClassname = () => {
  const { refetchAfterMutation } = useQueryClientHook();
  const onError = (error: TBaseResponse<TSingleClassName>) =>
    toast.error(error.message);

  const onSuccess = ({ message }: TBaseResponse<TSingleClassName>) => {
    toast.success(message);
    refetchAfterMutation(["classnames"]);
  };

  return useMutation({
    mutationKey: ["create-classname"],
    mutationFn: (data: TSingleClassname) => postClassname(uriClassName, data),
    onError,
    onSuccess,
  });
};

export const usePostLesson = () => {
  const { refetchAfterMutation } = useQueryClientHook();
  const onError = ({ message }: TBaseResponse<null>) => toast.error(message);
  const onSuccess = ({ message }: TBaseResponse<null>) => {
    toast.success(message);
    refetchAfterMutation(["lessons"]);
  };

  return useMutation({
    mutationKey: ["create-lesson"],
    mutationFn: (data: TSingleLesson) => postLesson(uriLessons, data),
    onError,
    onSuccess,
  });
};

export const useGetLessons = () => {
  const URI = uriLessons;
  return useQuery({
    queryKey: ["lessons"],
    queryFn: () => getLessons(URI),
  });
};

export const useGetTeacherByLesson = (lesson: string) => {
  const URI = `${uriGetLessonTeacher}/${lesson}`;
  return useQuery({
    queryKey: ["get-teacher-by-lesson"],
    queryFn: () => getTeacherByLesson(URI),
  });
};

export const useGetTeacherLessons = () => {
  const URI = uriGetLessonTeacher;
  return useQuery({
    queryKey: ["get-teacher-lessons"],
    queryFn: () => getTeacherLessons(URI),
  });
};

export const usePostTeacherLesson = () => {
  const URI = uriGetLessonTeacher;
  const { refetchAfterMutation } = useQueryClientHook();
  const onError = ({ message }: TBaseResponse<null>) => toast.error(message);
  const onSuccess = ({ message }: TBaseResponse<null>) => {
    toast.success(message);
    refetchAfterMutation(["get-teacher-by-lesson"]);
  };

  return useMutation({
    mutationKey: ["create-teacher-lesson"],
    mutationFn: (data: TPostTeacherLesson) => postTeacherLesson(URI, data),
    onError,
    onSuccess,
  });
};

export const useDeleteTeacherByLesson = () => {
  const URI = uriGetLessonTeacher;
  const { refetchAfterMutation } = useQueryClientHook();
  const onError = ({ message }: TBaseResponse<null>) => toast.error(message);
  const onSuccess = ({ message }: TBaseResponse<null>) => {
    toast.success(message);
    refetchAfterMutation(["get-teacher-by-lesson"]);
  };

  return useMutation({
    mutationKey: ["delete-teacher-by-lesson"],
    mutationFn: (data: TSingleId) => deleteTeacherLessonById(URI, data),
    onError,
    onSuccess,
  });
};

export const useGetTeacherLessonById = (id: string) => {
  const URI = `${uriTeacherLessonByClass}/${id}`;
  return useQuery({
    queryKey: ["get-teacher-lesson-by-id", id],
    queryFn: () => getTeacherLessonById(URI),
    enabled: !!id,
  });
};

export const useGetPresenceDate = (classname: string, lesson: string) => {
  const URI = `${uriPresences}/${classname}/${lesson}`;
  return useQuery({
    queryKey: ["presence", classname, lesson],
    queryFn: () => getPresenceDate(URI),
    enabled: !!classname && !!lesson,
  });
};

export const useCreatePresences = (classname: string, lesson: string) => {
  const URI = uriPresences;
  const { actionFirstModal } = useActiveModal();
  const { refetchAfterMutation } = useQueryClientHook();
  const onError = (error: TBaseResponse<TValuePrecences>) =>
    toast.error(error.message);
  const onSuccess = (success: TBaseResponse<TValuePrecences>) => {
    toast.success(success.message);
    actionFirstModal();
    refetchAfterMutation(["presence", classname, lesson]);
  };

  return useMutation({
    mutationKey: ["presence", classname, lesson],
    mutationFn: (data: TPresences[]) => postPresences(URI, data),
    onSuccess,
    onError,
  });
};
