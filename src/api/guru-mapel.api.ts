import { TClassAndLessonParam, requestHandler } from "@/types/commonTypes";
import {
  TAttendanceAndAssessmentBody,
  TBaseBobotById,
  TCreateAssessment,
  TGetAttendances,
  TValueAssessment,
  TValueAttendancesAndAssessments,
} from "@/types/componentTypes";

export const bobotByClassAndLesson = (url: string) =>
  requestHandler<TBaseBobotById>({ url, method: "GET" });

export const bobotByClassAndLessonFromPost = (
  url: string,
  data: TClassAndLessonParam
) =>
  requestHandler<TBaseBobotById, TClassAndLessonParam>({
    url,
    method: "POST",
    data,
  });

export const postAssessment = (url: string, data: TCreateAssessment) =>
  requestHandler<null, TCreateAssessment>({ url, method: "POST", data });

export const getStudentPerformance = (url: string) =>
  requestHandler<TValueAttendancesAndAssessments>({
    url,
    method: "GET",
  });

export const getAttendancesFromPost = (
  url: string,
  data: TAttendanceAndAssessmentBody
) =>
  requestHandler<TGetAttendances[], TAttendanceAndAssessmentBody>({
    url,
    method: "POST",
    data,
  });

export const getAssessmentsFromPost = (
  url: string,
  data: TAttendanceAndAssessmentBody
) =>
  requestHandler<TValueAssessment[], TAttendanceAndAssessmentBody>({
    url,
    method: "POST",
    data,
  });

export const getPresenceDate = (url: string) =>
  requestHandler<boolean>({ url, method: "GET" });
