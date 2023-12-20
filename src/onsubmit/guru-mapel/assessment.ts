import { usePatchBobot, usePostAssessment } from "@/hooks/use-assessment";
import { useGeneralStore } from "@/store/generalStore";
import { useAuth } from "@/store/userStore";
import { TBaseBobotById, TBobot } from "@/types/componentTypes";
import { FormValues } from "@/utils/form-props";
import { TDataResponse } from "@/utils/response-type";
import { UseMutationResult } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { TLabelAssessment } from "@/types/componentTypes";
import { toast } from "react-toastify";

export type TMutationBobot = UseMutationResult<
  TDataResponse<TBaseBobotById>,
  Error,
  TBobot,
  unknown
>;

type TParams = {
  classname: string;
  lesson: string;
};

const parseToNumber = (score: number): number => Number(score);

export const SubmitAssessment = (bobotId?: string) => {
  const { handleSubmit, control } = useForm<FormValues>({
    mode: "onChange",
  });

  const { setTypeAssessment, typeAssessment } = useGeneralStore();
  const userId = useAuth((v) => v.user?.id);
  const handleAssessment = (label: TLabelAssessment) =>
    setTypeAssessment(label);

  const { classname, lesson } = useParams() as TParams;
  const { dataId } = useGeneralStore();

  const create = usePatchBobot(classname, lesson, userId, bobotId);
  const onSubmitBobot = handleSubmit(async (e) => {
    try {
      let datas: TBobot = { tugas: 0, ulangan: 0, uts: 0, uas: 0 };
      for (const toNumber in e) {
        Object.assign(datas, { [toNumber]: Number(e[toNumber]) });
      }
      await create.mutateAsync(datas);
    } catch (err) {
      console.error(err);
    }
  });

  const { mutateAsync } = usePostAssessment();
  const onSubmitTugas = handleSubmit(async ({ score, description }) => {
    try {
      if (!dataId) {
        toast.info("Pilih nama siswa");
        return;
      }

      const scoreToNumber = parseToNumber(score);
      const datas = {
        score: scoreToNumber,
        description,
        type: typeAssessment,
        lessonId: lesson,
        studentId: dataId,
      };

      await mutateAsync(datas);
    } catch (err) {
      console.error(err);
    }
  });

  return { handleAssessment, onSubmitBobot, control, onSubmitTugas };
};
