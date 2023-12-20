import { useForm } from "react-hook-form";
import { FormValues } from "@/utils/form-props";
import { usePostClassname } from "@/hooks/use-admin";
import { modalId } from "@/utils/modal-id";
import { useActiveModal } from "@/custom-hook/useActiveModal";
import { createPortal } from "react-dom";
import TransitionModal from "../templates/TransitionModal";
import TextfieldMultipleType from "../textfields/TextfieldMultipleType";
import SecondaryButton from "../buttons/SecondaryButton";

const FormCreateClass = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    mode: "onChange",
  });

  const { isFirstModal, actionFirstModal } = useActiveModal();

  const postClassname = usePostClassname();

  const onSubmit = handleSubmit(async (e) => {
    await postClassname.mutateAsync(e);
  });

  return (
    <>
      {!modalId
        ? null
        : createPortal(
            <TransitionModal
              title="tambah data kelas"
              isOpenModal={isFirstModal}
              isCloseModal={actionFirstModal}
              labelBtnTransparent="kembali"
              textColor="text-secondary"
            >
              <form className="flex flex-col gap-4 my-4" onSubmit={onSubmit}>
                <label htmlFor="class">Kelas</label>
                <TextfieldMultipleType
                  name="classname"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  type="text"
                  id="class"
                  placeholder="masukkan nama kelas"
                />
                <SecondaryButton label="simpan kelas" />
              </form>
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default FormCreateClass;
