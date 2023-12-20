import { toast } from "react-toastify";
import {
  deleteStudentAndParent,
  getParentById,
  getPhoneNumberByRole,
  getStudentByClass,
  patchStudentClass,
  postParentAndStudent,
  postStudent,
} from "@/api/user.api";
import {
  uriCreateParentAndStudent,
  uriCreateStudent,
  uriFindPhoneNumber,
  uriGetParents,
  uriGetStudents,
  uriGradeIncrement,
} from "@/api/wali-kelas-api";
import { ERole, TBaseResponse } from "@/types/commonTypes";
import {
  TBodyGradeIncrement,
  TPostParentAndStudent,
  TPostStudent,
  TSingleId,
  TSinglePhone,
} from "@/types/componentTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClientHook } from "@/custom-hook/useQueryClient";
import { useActiveModal } from "@/custom-hook/useActiveModal";
import { useGeneralStore } from "@/store/generalStore";

export const useGetStudentByClass = (classname: string) => {
  const URI = `${uriGetStudents}/${classname}`;
  return useQuery({
    queryKey: ["student", classname],
    queryFn: () => getStudentByClass(URI),
    enabled: !!classname,
  });
};

export const usePatchStudentClass = (id: string, classname?: string) => {
  const { refetchAfterMutation } = useQueryClientHook();
  const onError = ({ message }: TBaseResponse<null>) => toast.error(message);
  const onSuccess = ({ message }: TBaseResponse<null>) => {
    toast.success(message);
    refetchAfterMutation(["student", classname]);
  };

  return useMutation({
    mutationKey: ["patch-student-class", id],
    mutationFn: (data: TBodyGradeIncrement) =>
      patchStudentClass(uriGradeIncrement, data),
    onError,
    onSuccess,
  });
};

export const useGetParentById = (id: string) => {
  const uri = `${uriGetParents}/${id}`;
  return useQuery({
    queryKey: ["parent-id", id],
    queryFn: () => getParentById(uri),
    enabled: !!id,
  });
};

export const usePostParentAndStudent = (classname: string) => {
  const URI = uriCreateParentAndStudent;
  const { refetchAfterMutation } = useQueryClientHook();
  const { actionSecondModal } = useActiveModal();

  const onError = ({ message }: TBaseResponse<null>) => toast.error(message);
  const onSuccess = ({ message }: TBaseResponse<null>) => {
    toast.success(message);
    actionSecondModal();
    refetchAfterMutation(["student", classname]);
  };

  return useMutation({
    mutationKey: ["create-parent-and-student"],
    mutationFn: (data: TPostParentAndStudent) =>
      postParentAndStudent(URI, data),
    onSuccess,
    onError,
  });
};

export const usePostStudent = (parentId: string, classname: string) => {
  const URI = `${uriCreateStudent}/${parentId}`;
  const { refetchAfterMutation } = useQueryClientHook();
  const { actionThirthModal } = useActiveModal();

  const onError = ({ message }: TBaseResponse<null>) => toast.error(message);
  const onSuccess = ({ message }: TBaseResponse<null>) => {
    toast.success(message);
    actionThirthModal();
    refetchAfterMutation(["student", classname]);
  };

  return useMutation({
    mutationKey: ["create-student"],
    mutationFn: (data: TPostStudent) => postStudent(URI, data),
    onError,
    onSuccess,
  });
};

export const useDeleteStudentAndParent = (classname: string) => {
  const { refetchAfterMutation } = useQueryClientHook();
  const onError = ({ message }: TBaseResponse<null>) => toast.error(message);
  const onSuccess = ({ message }: TBaseResponse<null>) => {
    toast.success(message);
    refetchAfterMutation(["student", classname]);
  };

  return useMutation({
    mutationKey: ["delete-student-and-parent"],
    mutationFn: deleteStudentAndParent,
    onError,
    onSuccess,
  });
};

export const useGetPhoneNumber = (role: ERole) => {
  const URI = `${uriFindPhoneNumber}/${role}`;
  const { actionFirstModal, actionSecondModal, actionThirthModal } =
    useActiveModal();
  const setId = useGeneralStore((v) => v.setDataId);

  const onError = ({ message }: TBaseResponse<TSingleId>) => {
    toast.error(message);
    actionFirstModal();
    setTimeout(actionSecondModal, 1100);
  };

  const onSuccess = ({ message, data }: TBaseResponse<TSingleId>) => {
    toast.success(message);
    const parentId = data?.id ?? "";
    setId(parentId);
    actionFirstModal();
    setTimeout(actionThirthModal, 1100);
  };

  return useMutation({
    mutationKey: ["phone-number"],
    mutationFn: (data: TSinglePhone) => getPhoneNumberByRole(URI, data),
    onSuccess,
    onError,
  });
};
