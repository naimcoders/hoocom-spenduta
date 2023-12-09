import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { modalId } from "@/utils/modal-id";
import TransitionModal from "../templates/TransitionModal";

type TProps = {
  children: ReactNode;
  title: string;
  textColor: string;
  labelBtnTransparent: string;
  isOpenModal: boolean;
  isCloseModal: () => void;
};

const GeneralInfoModal = ({
  children,
  isOpenModal,
  isCloseModal,
  title,
  textColor,
  labelBtnTransparent,
}: TProps) => {
  return (
    <>
      {!modalId
        ? null
        : createPortal(
            <TransitionModal
              title={title}
              textColor={textColor}
              labelBtnTransparent={labelBtnTransparent}
              isOpenModal={isOpenModal}
              isCloseModal={isCloseModal}
            >
              {children}
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default GeneralInfoModal;
