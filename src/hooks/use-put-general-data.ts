import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { uriGeneralData } from "@/api/admin-api";
import { useModalStore } from "@/store/modalStore";
import { useGeneralStore } from "@/store/generalStore";
import { TDataResponse } from "@/utils/response-type";
import { useQueryClientHook } from "@/custom-hook/useQueryClient";

type BodyProps = {
  period: string;
  semester: string;
  kkm: number;
  emailSchool: string;
  passwordEmail: string;
};

const usePatchGeneralData = () => {
  const dataId = useGeneralStore((state) => state.dataId);
  const { refetchAfterMutation } = useQueryClientHook();

  const fetchData = async (newData: BodyProps) => {
    try {
      const datas = await axios.patch(`${uriGeneralData}/${dataId}`, newData);
      const response = await datas.data;
      return response;
    } catch (err) {
      const error = err as AxiosError;
      throw new Error(error.message);
    }
  };

  const onError = (error: Error) => {
    toast.error(error.message);
  };

  const { isGeneralData, setIsGeneralData } = useModalStore();

  const onSuccess = (success: TDataResponse<null>) => {
    setIsGeneralData(!isGeneralData);
    toast.success(success.message);
    refetchAfterMutation(["general-data"]);
  };

  return useMutation(["general-settings"], fetchData, {
    onError,
    onSuccess,
  });
};

export default usePatchGeneralData;
