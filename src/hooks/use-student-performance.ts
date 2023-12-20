import axios, { AxiosError } from "axios";
import { useAuth } from "@/store/userStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { TDataResponse } from "@/utils/response-type";
import { uriStudentPerformance } from "@/api/wali-kelas-api";
import {
  getAssessmentsFromPost,
  getAttendancesFromPost,
  getStudentPerformance,
} from "@/api/guru-mapel.api";
import { TAttendanceAndAssessmentBody } from "@/types/componentTypes";

export type TResLesson = {
  lessonId: string;
};

export const useFindManyLessonsByClassAndPeriod = () => {
  const user = useAuth((v) => v.user);
  const classname = user?.teacher?.className;
  const period = user?.period;

  const URI = `${uriStudentPerformance}/${classname}/${period}`;

  const fetchData = async () => {
    try {
      const datas = await axios.get<TDataResponse<TResLesson[]>>(URI);
      return datas.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err as AxiosError<TDataResponse<TResLesson[]>>;
        const errorMessage =
          error.response?.data.message ?? "Terjadi kesalahan pada server";
        throw new Error(errorMessage);
      } else {
        throw new Error("Terjadi kesalahan saat mengirim permintaan");
      }
    }
  };

  return useQuery({
    queryKey: ["lessons-by-class-period", classname, period],
    queryFn: fetchData,
    enabled: !!classname && !!period,
  });
};

export const useGetStudentPerformance = (
  classname: string,
  lesson: string,
  period: string
) => {
  const URI = `${uriStudentPerformance}/${period}/${classname}/${lesson}`;

  return useQuery({
    queryKey: ["attendances", classname, lesson, period],
    queryFn: () => getStudentPerformance(URI),
    enabled: !!period && !!classname && !!lesson,
  });
};

export const useGetAttendancesFromPost = () => {
  const URI = `${uriStudentPerformance}/attendances`;

  return useMutation({
    mutationKey: ["attendances"],
    mutationFn: (data: TAttendanceAndAssessmentBody) =>
      getAttendancesFromPost(URI, data),
  });
};

export const useGetAssessmentsFromPost = () => {
  const URI = `${uriStudentPerformance}/assessments`;
  return useMutation({
    mutationKey: ["assessments"],
    mutationFn: (data: TAttendanceAndAssessmentBody) =>
      getAssessmentsFromPost(URI, data),
  });
};
