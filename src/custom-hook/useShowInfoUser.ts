import { useModalStore } from "@/store/modalStore";

export const useShowInfoUser = () => {
  const { isShowInfoUser, setIsShowInfoUser } = useModalStore();

  const closeModal = () => setIsShowInfoUser(!isShowInfoUser);

  return {
    isShowInfoUser,
    setIsShowInfoUser,
    closeModal,
  };
};
