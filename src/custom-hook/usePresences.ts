import { TPresences, useGeneralStore } from "@/store/generalStore";
import { FieldValues, useForm } from "react-hook-form";
import { useActiveModal } from "./useActiveModal";
import { useCreatePresences } from "@/hooks/use-admin";
import { toast } from "react-toastify";

export const usePresences = (
  classname: string,
  lesson: string,
  totalStudents: number
) => {
  const { register, handleSubmit, unregister, getValues } =
    useForm<FieldValues>({
      mode: "onChange",
    });
  const { presences, setPresences } = useGeneralStore();
  const { isFirstModal, actionFirstModal } = useActiveModal();

  const setBeginPresences = handleSubmit((e) => {
    const arrPresences: TPresences[] = [];
    const keys = Object.keys(e);

    keys.forEach((id) => {
      const filterId = presences.filter((presence) => {
        return presence.studentId === id;
      });

      const mappingId = filterId.map((presence) => ({
        ...presence,
        description: getValues(id),
      }));

      arrPresences.push(...mappingId);
    });

    const getAttendAndAbsent = presences.filter((presence) => {
      return presence.status !== "Izin";
    });

    arrPresences.push(...getAttendAndAbsent);

    if (arrPresences.length < totalStudents) {
      toast.info("Pastikan semua siswa telah dipresensi.");
      return;
    }

    setPresences(arrPresences);
    actionFirstModal();
  });

  const createPresences = useCreatePresences(classname, lesson);
  const submitFinalPresences = async () => {
    await createPresences.mutateAsync(presences);
  };

  return {
    setBeginPresences,
    submitFinalPresences,
    register,
    unregister,
    createPresences,
    isFirstModal,
    actionFirstModal,
  };
};
