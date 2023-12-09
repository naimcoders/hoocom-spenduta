import { useAuth } from "@/store/userStore";
import axios, { AxiosError } from "axios";
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
  TBasePatchCurrentScore,
  TBobot,
  TCreateAssessment,
  TSingleId,
} from "@/types/componentTypes";
import { uriStudentPerformance } from "@/api/wali-kelas-api";

export const useReadBobot = (classname: string, lesson: string) => {
  const user = useAuth((v) => v.user);
  const id = user?.id;
  const URI = `${uriAssessment}/bobot/${id}/${classname}/${lesson}`;

  return useQuery<TBaseResponse<TBaseBobotById>, Error>({
    queryKey: ["bobot", id, classname, lesson],
    queryFn: () => bobotByClassAndLesson(URI),
    enabled: !!id && !!classname && !!lesson,
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

export const useCreateBobot = (
  id: string | undefined,
  classname: string,
  lesson: string,
  bobotId: string | undefined
) => {
  const URI: string = `${uriAssessment}/bobot/${bobotId}`;

  const fetchCreate = async (bodyCreate: TBobot) => {
    try {
      const datas = await axios.patch<TBaseResponse<null>>(URI, bodyCreate);
      return datas.data;
    } catch (err) {
      const error = err as AxiosError;
      throw new Error(error.message);
    }
  };

  const reloadPaage = () => window.location.reload();

  const onSuccess = (success: TBaseResponse<null>) => {
    toast.success(success.message);
    setTimeout(reloadPaage, 1300);
  };

  return useMutation<TBaseResponse<null>, Error, TBobot>(
    ["bobot", id, classname, lesson],
    fetchCreate,
    { onSuccess }
  );
};

export type TResSaveScores = {
  id: string;
};

export const usePostAssessment = () => {
  const URI: string = `${uriAssessment}/create`;

  const onError = (error: TBaseResponse<TSingleId>) => {
    toast.error(error.message);
  };

  const onSuccess = (success: TBaseResponse<TSingleId>) => {
    toast.success(success.message);
    setTimeout(reloadPage, 1500);
  };

  return useMutation({
    mutationKey: ["assessment"],
    mutationFn: (data: TCreateAssessment) => postAssessment(URI, data),
    onSuccess,
    onError,
  });
};

type TResPatchScore = {
  id: string;
};

export const usePatchCurrentScore = () => {
  const URI: string = `${uriAssessment}/score`;

  const fetchData = async (body: TBasePatchCurrentScore) => {
    try {
      const datas = await axios.patch<TBaseResponse<TResPatchScore>>(URI, body);
      return datas.data;
    } catch (err) {
      const error = err as AxiosError;
      throw new Error(error.message);
    }
  };

  const onError = (error: Error) => {
    toast.error(error.message);
  };

  const onSuccess = (success: TBaseResponse<TResPatchScore>) => {
    toast.success(success.message);
    setTimeout(reloadPage, 2000);
  };

  return useMutation(["current-score"], fetchData, { onSuccess, onError });
};
