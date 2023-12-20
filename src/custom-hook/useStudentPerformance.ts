import { useGetStudentPerformance } from "@/hooks/use-student-performance";
import { useGetStudentByClass } from "@/hooks/use-wali-kelas";
import { useGeneralStore } from "@/store/generalStore";
import { useAuth } from "@/store/userStore";
import { TSingleClassname } from "@/types/componentTypes";
import { useParams } from "react-router-dom";

export const useStudentPerformance = () => {
  const { classname } = useParams() as TSingleClassname;
  const { selectedLesson } = useGeneralStore();

  const user = useAuth((v) => v.user);
  const period = user?.period ?? "";

  const getStudents = useGetStudentByClass(classname);
  const dataPerformance = useGetStudentPerformance(
    classname,
    selectedLesson!,
    period
  );

  const students = getStudents.data?.data;
  const attendances = dataPerformance.data?.data?.attendances;
  const assessments = dataPerformance.data?.data?.assessments;
  const bobots = dataPerformance.data?.data?.bobot;

  return {
    getStudents,
    dataPerformance,
    students,
    attendances,
    assessments,
    bobots,
  };
};
