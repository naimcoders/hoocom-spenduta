import SecondaryButton from "../buttons/SecondaryButton";
import TextfieldMultipleType from "../textfields/TextfieldMultipleType";
import { createPortal } from "react-dom";
import TransitionModal from "../templates/TransitionModal";
import Loading from "../Loading";
import { modalId } from "@/utils/modal-id";
import { useFormParentAndStudent } from "@/custom-hook/useFormParentAndStudent";
import { FormParentAndStudentDatas } from "@/utils/form-props";
import { useGetClassname } from "@/hooks/use-admin";
import { useActiveModal } from "@/custom-hook/useActiveModal";

const CreateParentAndStudentModal = () => {
  const { control, onSubmit, isLoading } = useFormParentAndStudent();
  const { actionSecondModal, isSecondModal } = useActiveModal();

  const classnames = useGetClassname();
  if (classnames.isLoading || isLoading || !classnames.data?.data)
    return <Loading />;

  return (
    <>
      {!modalId
        ? null
        : createPortal(
            <TransitionModal
              isOpenModal={isSecondModal}
              isCloseModal={actionSecondModal}
              labelBtnTransparent="batal"
              textColor="text-secondary"
              title="Buat data orang tua dan anak"
            >
              <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                {FormParentAndStudentDatas.map((parent) => (
                  <section key={parent.id} className="flex flex-col gap-2">
                    <label htmlFor={parent.id} className="capitalize text-15px">
                      {parent.label}
                    </label>
                    <TextfieldMultipleType
                      name={parent.id}
                      control={control}
                      type={parent.type}
                      defaultValue=""
                      id={parent.id}
                      placeholder={parent.placeholder}
                      rules={{ required: true }}
                    />
                  </section>
                ))}

                <SecondaryButton label="simpan data" />
              </form>
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default CreateParentAndStudentModal;
