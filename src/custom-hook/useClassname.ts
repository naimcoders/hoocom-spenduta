import { useDeleteClassname, useGetTeacherLessonById } from "@/hooks/use-admin";
import { useGeneralStore } from "@/store/generalStore";
import { useAuth } from "@/store/userStore";
import { TUseClassList } from "@/types/componentTypes";
import { useNavigate, useLocation } from "react-router-dom";

export const useClassname = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mutateAsync } = useDeleteClassname();

  const handleDeleteClass = async (classname: string) => {
    try {
      await mutateAsync({ classname });
      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePushClass = (classname: string) => {
    const path = `${pathname}/${classname}`;
    navigate(path);
  };

  return { handleDeleteClass, handlePushClass };
};

export const useClassList = () => {
  const teacherId = useAuth((v) => v.user?.id);
  const selectedClass = useGeneralStore((v) => v.selectedClass);
  const { data, isLoading } = useGetTeacherLessonById(teacherId ?? "");

  const mapClasses = data?.data?.map((classes) => classes.classNameId);
  const removeDuplicate = mapClasses?.filter((value, index) => {
    return mapClasses.indexOf(value) === index;
  });

  const arrClassname: TUseClassList[] = [];
  removeDuplicate?.forEach((classes, index) => {
    arrClassname.push({ id: index, classname: classes });
  });

  const filterClassname = data?.data?.filter(
    (classes) => classes.classNameId === selectedClass
  );
  const mapping = filterClassname?.map((mapped) => mapped.lessonId);
  const arrLesson: TUseClassList[] = [];
  mapping?.forEach((lesson, index) => {
    arrLesson.push({ id: index, lesson });
  });

  return { arrClassname, arrLesson, isLoading };
};
