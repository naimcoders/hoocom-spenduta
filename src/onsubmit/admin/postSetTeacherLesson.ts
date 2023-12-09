import useUserStore from "@/store/userStore";
import { useGeneralStore } from "@/store/generalStore";
import { FormValues } from "@/utils/form-props";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  useDeleteTeacherByLesson,
  usePostTeacherLesson,
} from "@/hooks/use-admin";

export const postSetTeacherLesson = (lesson?: string) => {
  const { handleSubmit } = useForm<FormValues>({ mode: "onChange" });
  const { selectedClass } = useUserStore();
  const { dataId } = useGeneralStore();
  const teacherPosted = usePostTeacherLesson();
  const teacherDeleted = useDeleteTeacherByLesson();

  const posted = handleSubmit(async () => {
    try {
      if (selectedClass === "Pilih kelas" || dataId === "") {
        toast.info("Pastikan untuk memilih kelas dan guru mapel.");
        return;
      }

      const data = {
        lesson: lesson ?? "",
        classname: selectedClass ?? "",
        teacher: dataId,
      };
      await teacherPosted.mutateAsync(data);
    } catch (err) {
      console.error(err);
    }
  });

  const deleted = async (id: string) => {
    await teacherDeleted.mutateAsync({ id });
  };

  return { teacherPosted, teacherDeleted, handleSubmit, posted, deleted };
};
