import { modalId } from "@/utils/modal-id";
import { createPortal } from "react-dom";
import { useFormStudent } from "@/custom-hook/useFormStudent";
import { FormStudentDatas } from "@/utils/form-props";
import { useGetClassname } from "@/hooks/use-admin";
import TextfieldMultipleType from "../textfields/TextfieldMultipleType";
import SecondaryButton from "../buttons/SecondaryButton";
import TransitionModal from "../templates/TransitionModal";
import Loading from "../Loading";

const CreateStudentModal = () => {
  const { control, onSubmit, isThirthModal, actionThirthModal, getParentById } =
    useFormStudent();

  const { data, isLoading } = useGetClassname();
  if (isLoading || !data?.data) return <Loading />;

  return (
    <>
      {!modalId
        ? null
        : createPortal(
            <TransitionModal
              isOpenModal={isThirthModal}
              isCloseModal={actionThirthModal}
              labelBtnTransparent="batal"
              textColor="text-secondary"
              title="buat data siswa"
            >
              <section className="flex flex-col gap-6">
                <h2 className="text-15px">
                  Orang tua :{" "}
                  <span className="text-secondary">
                    {getParentById.data?.data?.fullname}
                  </span>
                </h2>

                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                  {FormStudentDatas.map((student) => (
                    <section key={student.id} className="flex flex-col gap-2">
                      <label
                        htmlFor={student.id}
                        className="capitalize text-15px"
                      >
                        {student.label}
                      </label>
                      <TextfieldMultipleType
                        name={student.id}
                        control={control}
                        type={student.type}
                        defaultValue=""
                        id={student.id}
                        placeholder={student.placeholder}
                        rules={{ required: true }}
                      />
                    </section>
                  ))}

                  <SecondaryButton label="simpan data" />
                </form>
              </section>
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default CreateStudentModal;
