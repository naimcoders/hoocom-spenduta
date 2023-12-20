import { createPortal } from "react-dom";
import { modalId } from "@/utils/modal-id";
import { useFormLesson } from "@/custom-hook/useFormLesson";
import TransitionModal from "../templates/TransitionModal";
import TextfieldMultipleType from "../textfields/TextfieldMultipleType";
import SecondaryButton from "../buttons/SecondaryButton";

const CreateLessonModal = () => {
  const { isFirstModal, actionFirstModal, control, onSubmit } = useFormLesson();

  return (
    <>
      {!modalId
        ? null
        : createPortal(
            <TransitionModal
              title="tambah data mapel"
              isOpenModal={isFirstModal}
              isCloseModal={actionFirstModal}
              labelBtnTransparent="Kembali"
              textColor="text-secondary"
            >
              <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <label htmlFor="lesson">Mata Pelajaran</label>
                <TextfieldMultipleType
                  name="lesson"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  type="text"
                  id="lesson"
                  placeholder="masukkan nama mapel"
                />
                <SecondaryButton label="simpan mapel" />
              </form>
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default CreateLessonModal;
