import { useModalStore } from "@/store/modalStore";
import { useForm } from "react-hook-form";
import { FormValues } from "@/utils/form-props";
import { useGetGeneralData } from "@/hooks/use-admin";
import { createPortal } from "react-dom";
import { modalId } from "@/utils/modal-id";
import SecondaryButton from "../buttons/SecondaryButton";
import TextfieldMultipleType from "../textfields/TextfieldMultipleType";
import TransitionModal from "../templates/TransitionModal";
import SubmitGeneralData from "@/onsubmit/admin/submitGeneralData";
import Loading from "../Loading";

const GeneralDataModal = () => {
  const { handleSubmit, control } = useForm<FormValues>({ mode: "onChange" });
  const { isGeneralData, setIsGeneralData } = useModalStore();

  const closeModal = () => setIsGeneralData(!isGeneralData);
  const { data } = useGetGeneralData();
  const { onSubmit, isLoading } = SubmitGeneralData();

  if (isLoading) return <Loading />;
  const getData = data?.data!;

  return (
    <>
      {!modalId
        ? null
        : createPortal(
            <TransitionModal
              title="edit data umum"
              isOpenModal={isGeneralData}
              isCloseModal={closeModal}
              textColor="text-secondary"
              labelBtnTransparent="batal"
            >
              <form
                className="flex flex-col gap-4 my-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-auto-fit gap-2">
                  <section className="flex flex-col gap-2">
                    <label htmlFor="period" className="capitalize text-15px">
                      periode
                    </label>
                    <TextfieldMultipleType
                      name="period"
                      control={control}
                      rules={{ required: true }}
                      defaultValue={getData.period}
                      type="text"
                      id="period"
                      placeholder="masukkan periode"
                    />
                  </section>
                  <section className="flex flex-col gap-2">
                    <label htmlFor="semester" className="capitalize text-15px">
                      semester
                    </label>
                    <TextfieldMultipleType
                      name="semester"
                      control={control}
                      rules={{ required: true }}
                      defaultValue={getData.semester}
                      type="text"
                      id="semester"
                      placeholder="masukkan semester"
                    />
                  </section>
                  <section className="flex flex-col gap-2">
                    <label htmlFor="kkm" className="capitalize text-15px">
                      KKM
                    </label>
                    <TextfieldMultipleType
                      name="kkm"
                      control={control}
                      rules={{ required: true }}
                      defaultValue={getData.kkm}
                      type="text"
                      id="kkm"
                      placeholder="masukkan KKM"
                    />
                  </section>
                  <section className="flex flex-col gap-2">
                    <label htmlFor="email" className="capitalize text-15px">
                      email sekolah
                    </label>
                    <TextfieldMultipleType
                      name="emailSchool"
                      control={control}
                      rules={{ required: true }}
                      defaultValue={getData.emailSchool}
                      type="email"
                      id="email"
                      placeholder="masukkan email sekolah"
                    />
                  </section>
                  <section className="flex flex-col gap-2">
                    <label htmlFor="password" className="capitalize text-15px">
                      kata sandi
                    </label>
                    <TextfieldMultipleType
                      name="passwordEmail"
                      control={control}
                      rules={{ required: true }}
                      defaultValue={getData.passwordEmail}
                      type="password"
                      id="password"
                      placeholder="masukkan sandi email"
                    />
                  </section>
                </div>

                <SecondaryButton label="simpan data" />
              </form>
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default GeneralDataModal;
