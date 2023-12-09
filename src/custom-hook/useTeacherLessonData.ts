import { useModalStore } from "@/store/modalStore";

export const useTeacherLessonData = () => {
  const { isCreateTeacherLesson, setIsCreateTeacherLesson } = useModalStore();
  const modalAction = () => setIsCreateTeacherLesson(!isCreateTeacherLesson);
  return { modalAction, isCreateTeacherLesson, setIsCreateTeacherLesson };
};
