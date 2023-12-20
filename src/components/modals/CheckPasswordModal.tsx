import { modalId } from "@/utils/modal-id";
import { createPortal } from "react-dom";
import { usePasswordHook } from "@/custom-hook/useProfile";
import TransitionModal from "../templates/TransitionModal";
import SecondaryButton from "../buttons/SecondaryButton";
import TextfieldMultipleType from "../textfields/TextfieldMultipleType";
import { SubmitProfile } from "@/onsubmit/profile.submit";

const InputOldPasswordComponent = () => {
  const { onSubmitCheckPassword, control } = SubmitProfile();

  return (
    <form onSubmit={onSubmitCheckPassword} className="flex flex-col gap-5">
      <section className="flex flex-col gap-2">
        <label htmlFor="password" className="capitalize text-14px">
          kata sandi lama
        </label>
        <TextfieldMultipleType
          id="password"
          name="password"
          type="password"
          placeholder="masukkan kata sandi lama..."
          control={control}
          defaultValue=""
          rules={{ required: true }}
        />
      </section>

      <SecondaryButton label="Selanjutnya" />
    </form>
  );
};

const CheckPasswordModal = () => {
  const { isFirstModal, actionFirstModal } = usePasswordHook();

  return (
    <>
      {!modalId
        ? null
        : createPortal(
            <TransitionModal
              labelBtnTransparent="kembali"
              title="validasi kata sandi"
              textColor="text-secondary"
              isOpenModal={isFirstModal}
              isCloseModal={actionFirstModal}
            >
              <InputOldPasswordComponent />
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default CheckPasswordModal;
