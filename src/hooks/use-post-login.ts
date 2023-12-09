import useUserStore from "@/store/userStore";
import axios from "axios";
import { toast } from "react-toastify";
import { uriLoginEmployee } from "@/api/auth-api";
import { auth, signInWithCustomToken } from "@/configs/firebase";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { TBaseTeacher } from "@/types/commonTypes";

type BodyProps = {
  fullname: string;
  password: string;
  accountType: string;
};

type TSuccess = {
  token: string;
  pathTo: string;
  user: TBaseTeacher;
};

const usePostLogin = () => {
  const navigate = useNavigate();
  const { setAccountType, setIsAuth, isAuth } = useUserStore();

  const mutationFn = async (newData: BodyProps) => {
    const response = await axios.post(uriLoginEmployee, newData);
    return response.data;
  };

  const onError = (error: any) => {
    toast.error(error.response.data.message);
  };

  const onSuccess = async (success: TSuccess) => {
    try {
      await signInWithCustomToken(auth, success.token);
      setIsAuth(!isAuth);
      const path = success.pathTo;

      setAccountType("");
      navigate(path);
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation({
    mutationKey: ["user-login"],
    mutationFn,
    onError,
    onSuccess,
  });

  return mutation;
};

export default usePostLogin;
