import { modalId } from "@/utils/modal-id";
import { createPortal } from "react-dom";
import { usePasswordHook } from "@/custom-hook/useProfile";
import TransitionModal from "../templates/TransitionModal";
import SecondaryButton from "../buttons/SecondaryButton";
import TextfieldMultipleType from "../textfields/TextfieldMultipleType";
import { SubmitProfile } from "@/onsubmit/profile.submit";

type TLabel = "password" | "confirmPassword";

type TArrInputs = {
  label: TLabel;
  placeholder: string;
};

const arrInputs: TArrInputs[] = [
  { label: "password", placeholder: "masukkan kata sandi baru" },
  { label: "confirmPassword", placeholder: "masukkan konfirmasi kata sandi" },
];

const setLabelInput = (label: TLabel): string => {
  return label === "password"
    ? "kata sandi baru"
    : "konfirmasi kata sandi baru";
};

const Form = () => {
  const { onSubmitChangePassword, control } = SubmitProfile();

  return (
    <form onSubmit={onSubmitChangePassword} className="flex flex-col gap-5">
      {arrInputs.map(({ label, placeholder }) => (
        <section className="flex flex-col gap-2" key={label}>
          <label htmlFor={label} className="capitalize text-14px">
            {setLabelInput(label)}
          </label>
          <TextfieldMultipleType
            id={label}
            name={label}
            type="password"
            placeholder={placeholder}
            control={control}
            defaultValue=""
            rules={{ required: true }}
          />
        </section>
      ))}

      <SecondaryButton label="simpan perubahan" />
    </form>
  );
};

const ChangePasswordModal = () => {
  const { actionSecondModal, isSecondModal } = usePasswordHook();

  return (
    <>
      {!modalId
        ? null
        : createPortal(
            <TransitionModal
              labelBtnTransparent="batal"
              title="ubah kata sandi"
              textColor="text-secondary"
              isOpenModal={isSecondModal}
              isCloseModal={actionSecondModal}
            >
              <Form />
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default ChangePasswordModal;
