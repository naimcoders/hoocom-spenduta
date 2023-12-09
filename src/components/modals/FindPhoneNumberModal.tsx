import ReactDOM from "react-dom";
import TransitionModal from "../templates/TransitionModal";
import TextfieldMultipleType from "../textfields/TextfieldMultipleType";
import SecondaryButton from "../buttons/SecondaryButton";
import { useFormPhoneNumber } from "@/custom-hook/useFormPhoneNumber";
import { modalId } from "@/utils/modal-id";
import { useActiveModal } from "@/custom-hook/useActiveModal";

const FormFindPhoneNumber = () => {
  const { control, onSubmit } = useFormPhoneNumber();

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <section className="flex flex-col gap-2">
        <label htmlFor="phone" className="capitalize">
          no. HP
        </label>
        <TextfieldMultipleType
          name="phone"
          control={control}
          type="number"
          defaultValue=""
          id="phone"
          placeholder="Cari no. HP orang tua..."
          rules={{ required: true }}
        />
      </section>
      <SecondaryButton label="Cari nomor" />
    </form>
  );
};

const FindPhoneNumberModal = () => {
  const { actionFirstModal, isFirstModal } = useActiveModal();

  return (
    <>
      {!modalId
        ? null
        : ReactDOM.createPortal(
            <TransitionModal
              title="cari no. HP orang tua"
              labelBtnTransparent="batal"
              textColor="text-secondary"
              isOpenModal={isFirstModal}
              isCloseModal={actionFirstModal}
            >
              <FormFindPhoneNumber />
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default FindPhoneNumberModal;
