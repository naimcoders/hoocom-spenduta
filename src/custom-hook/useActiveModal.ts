import { useModalStore } from "@/store/modalStore";

export const useActiveModal = () => {
  const { isShowInfoUser, setIsShowInfoUser } = useModalStore();
  const actionModalInfo = () => setIsShowInfoUser(!isShowInfoUser);
  const { isFirstModal, setIsFirstModal } = useModalStore();
  const actionFirstModal = () => setIsFirstModal(!isFirstModal);
  const { isSecondModal, setIsSecondModal } = useModalStore();
  const actionSecondModal = () => setIsSecondModal(!isSecondModal);
  const { isThirthModal, setIsThithModal } = useModalStore();
  const actionThirthModal = () => setIsThithModal(!isThirthModal);

  return {
    isShowInfoUser,
    actionModalInfo,
    actionFirstModal,
    actionSecondModal,
    actionThirthModal,
    isFirstModal,
    isSecondModal,
    isThirthModal,
  };
};
