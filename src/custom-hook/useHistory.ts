import {
  useGetAssessmentsFromPost,
  useGetAttendancesFromPost,
} from "@/hooks/use-student-performance";
import { useGeneralStore } from "@/store/generalStore";
import { TClassAndLessonParam } from "@/types/commonTypes";
import { TGetAttendances, TLabelPresence } from "@/types/componentTypes";
import { useParams } from "react-router-dom";

type TSemesterLocal = "1" | "2";
type TButton = {
  label: "Semester 1" | "Semester 2";
  onClick: () => void;
};

const filtered = (title: TLabelPresence, attendances?: TGetAttendances[]) => {
  return attendances?.filter((presence) => {
    return presence.status === title;
  });
};

export const HistoryHook = () => {
  const { classname, lesson } = useParams() as TClassAndLessonParam;
  const getAttendances = useGetAttendancesFromPost();

  const { setAttendances, attendances, setAssessmentValues } =
    useGeneralStore();

  const handleSemester = async (semester: TSemesterLocal) => {
    try {
      const datas = await getAttendances.mutateAsync({
        classname,
        lesson,
        semester,
      });
      setAttendances(datas.data);
    } catch (error) {
      console.error(error);
    }
  };

  const arrButtons: TButton[] = [
    { label: "Semester 1", onClick: () => handleSemester("1") },
    { label: "Semester 2", onClick: () => handleSemester("2") },
  ];

  const getAssessments = useGetAssessmentsFromPost();

  const handleAssessment = async (semester: TSemesterLocal) => {
    try {
      const datas = await getAssessments.mutateAsync({
        semester,
        classname,
        lesson,
      });
      setAssessmentValues(datas.data);
    } catch (error) {
      console.error(error);
    }
  };

  const arrAssessmentButtons: TButton[] = [
    { label: "Semester 1", onClick: () => handleAssessment("1") },
    { label: "Semester 2", onClick: () => handleAssessment("2") },
  ];

  const attendPrecences = filtered("Hadir", attendances);
  const permissionPrecences = filtered("Izin", attendances);
  const absentPrecences = filtered("Absen", attendances);

  return {
    arrButtons,
    arrAssessmentButtons,
    attendPrecences,
    permissionPrecences,
    absentPrecences,
  };
};
