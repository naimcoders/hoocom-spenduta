import usePatchGeneralData from "@/hooks/use-put-general-data";
import { FormValues } from "@/utils/form-props";
import { SubmitHandler } from "react-hook-form";

type handleSubmit = SubmitHandler<FormValues>;

const SubmitGeneralData = () => {
  const { mutateAsync, isLoading } = usePatchGeneralData();

  const onSubmit: handleSubmit = async (data) => {
    const newKKM = Number(data.kkm);

    const dataToMutate = { ...data, kkm: newKKM };
    await mutateAsync(dataToMutate);
  };

  return { onSubmit, isLoading };
};

export default SubmitGeneralData;
