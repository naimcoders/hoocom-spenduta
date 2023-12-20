import { createPortal } from "react-dom";
import { modalId } from "@/utils/modal-id";
import TransitionModal from "../templates/TransitionModal";
import { useGradeIncrement } from "@/custom-hook/useGradeIncrement";
import OptionClassnames from "../options/OptionClassnames";
import SecondaryButton from "../buttons/SecondaryButton";
import { useActiveModal } from "@/custom-hook/useActiveModal";
import { useGetClassname } from "@/hooks/use-admin";
import Loading from "../Loading";

const GradeIncrementModal = () => {
  const { isFirstModal, actionFirstModal } = useActiveModal();
  const { onUpClass } = useGradeIncrement();
  const { data, isFetching } = useGetClassname();
  if (isFetching || !data?.data) return <Loading />;

  return (
    <>
      {!modalId
        ? null
        : createPortal(
            <TransitionModal
              title="naik kelas"
              textColor="text-secondary"
              labelBtnTransparent="kembali"
              isOpenModal={isFirstModal}
              isCloseModal={actionFirstModal}
            >
              <section className="flex flex-col gap-4">
                <section className="flex flex-col gap-2">
                  <h2 className="text-15px">Pilih kelas</h2>
                  <OptionClassnames classes={data.data} />
                </section>
                <SecondaryButton label="naik kelas" onClick={onUpClass} />
              </section>
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default GradeIncrementModal;
