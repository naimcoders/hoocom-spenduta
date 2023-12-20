import { useAuth } from "@/store/userStore";
import { uriAssessment } from "@/api/guru-mapel";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { reloadPage } from "@/utils/default-type";
import { TBaseResponse, TClassAndLessonParam } from "@/types/commonTypes";
import {
  bobotByClassAndLesson,
  bobotByClassAndLessonFromPost,
  postAssessment,
} from "@/api/guru-mapel.api";
import {
  TBaseBobotById,
  TBobot,
  TCreateAssessment,
} from "@/types/componentTypes";
import { uriStudentPerformance } from "@/api/wali-kelas-api";
import { patchBobot } from "@/api/admin.api";
import { useQueryClientHook } from "@/custom-hook/useQueryClient";

export const useReadBobot = (classname: string, lesson: string) => {
  const id = useAuth((v) => v.user?.id);
  const URI = `${uriAssessment}/bobot/${id}/${classname}/${lesson}`;

  return useQuery<TBaseResponse<TBaseBobotById>, Error>({
    queryKey: ["bobot", id, classname, lesson],
    queryFn: () => bobotByClassAndLesson(URI),
    enabled: !!id && !!classname && !!lesson,
  });
};

export const usePatchBobot = (
  classname: string,
  lesson: string,
  id?: string,
  bobotId?: string
) => {
  const URI: string = `${uriAssessment}/bobot/${bobotId}`;
  const { refetchAfterMutation } = useQueryClientHook();
  const onError = ({ message }: TBaseResponse<null>) => toast.error(message);
  const onSuccess = ({ message }: TBaseResponse<null>) => {
    toast.success(message);
    refetchAfterMutation(["bobot", id, classname, lesson]);
  };

  return useMutation({
    mutationKey: ["patch-bobot"],
    mutationFn: (data: TBobot) => patchBobot(URI, data),
    onSuccess,
    onError,
  });
};

export const useGetBobotByClassAndLessonFromPost = () => {
  const URI = `${uriStudentPerformance}/bobot`;
  return useMutation({
    mutationKey: ["bobot"],
    mutationFn: (data: TClassAndLessonParam) =>
      bobotByClassAndLessonFromPost(URI, data),
  });
};

export const usePostAssessment = () => {
  const URI: string = `${uriAssessment}/create`;
  const onError = ({ message }: TBaseResponse<null>) => toast.error(message);
  const onSuccess = ({ message }: TBaseResponse<null>) => {
    toast.success(message);
    setTimeout(reloadPage, 1500);
  };

  return useMutation({
    mutationKey: ["create-assessment"],
    mutationFn: (data: TCreateAssessment) => postAssessment(URI, data),
    onSuccess,
    onError,
  });
};
