import { usePresences } from "@/custom-hook/usePresences";
import { createPortal } from "react-dom";
import TransitionModal from "../templates/TransitionModal";
import { modalId } from "@/utils/modal-id";
import SecondaryButton from "../buttons/SecondaryButton";

type TProps = { classname: string; lesson: string; totalStudents: number };

const CreateModalPresences = ({ classname, lesson, totalStudents }: TProps) => {
  const { actionFirstModal, isFirstModal, submitFinalPresences } = usePresences(
    classname,
    lesson,
    totalStudents
  );

  return (
    <>
      {!modalId
        ? null
        : createPortal(
            <TransitionModal
              textColor="text-secondary"
              title="Peringatan"
              labelBtnTransparent="kembali"
              isOpenModal={isFirstModal}
              isCloseModal={actionFirstModal}
            >
              <section className="flex flex-col gap-4 text-center text-15px">
                <h1 className="font-lexendMedium">
                  Presensi yang sudah disimpan tidak dapat diperbarui.
                </h1>
                <SecondaryButton
                  label={`simpan presensi ${classname}`}
                  onClick={submitFinalPresences}
                />
              </section>
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default CreateModalPresences;
