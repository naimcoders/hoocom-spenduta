import { useForm } from "react-hook-form";
import { FormValues } from "@/utils/form-props";
import TransitionModal from "../templates/TransitionModal";
import ReactDOM from "react-dom";
import submitEmployee from "@/onsubmit/admin/submitEmployee";
import Loading from "../Loading";
import SelectAccount from "../SelectAccount";
import SecondaryButton from "../buttons/SecondaryButton";
import TextfieldMultipleType from "../textfields/TextfieldMultipleType";
import OptionClassnames from "../options/OptionClassnames";
import { useGetClassname } from "@/hooks/use-admin";
import { modalId } from "@/utils/modal-id";
import { useActiveModal } from "@/custom-hook/useActiveModal";

type nameProp = "nip" | "fullname" | "phone" | "email";

type FormProps = {
  title: string;
  name: nameProp;
  type: string;
  placeholder: string;
};

const formEmployeeProps: FormProps[] = [
  {
    title: "Nomor Induk Pegawai",
    name: "nip",
    type: "text",
    placeholder: "Masukkan NIP",
  },
  {
    title: "Nama Lengkap",
    name: "fullname",
    type: "text",
    placeholder: "Masukkan nama lengkap",
  },
  {
    title: "Nomor HP/WA",
    name: "phone",
    type: "text",
    placeholder: "Masukkan nomor HP/WA",
  },
  {
    title: "Email",
    name: "email",
    type: "email",
    placeholder: "Masukkan email",
  },
];

const CreateEmployeeModal = () => {
  const { actionFirstModal, isFirstModal } = useActiveModal();
  const { handleSubmit, reset, control } = useForm<FormValues>({
    mode: "onChange",
  });

  const submit = submitEmployee(handleSubmit, reset);
  const { data, isFetching } = useGetClassname();

  if (isFetching || !data?.data || submit.isLoading) return <Loading />;

  return (
    <>
      {!modalId
        ? null
        : ReactDOM.createPortal(
            <TransitionModal
              title="tambah data pegawai"
              isOpenModal={isFirstModal}
              isCloseModal={actionFirstModal}
              textColor="text-secondary"
              labelBtnTransparent="batal"
            >
              <form
                className="flex flex-col gap-4 my-4"
                onSubmit={submit.onSubmit}
              >
                {formEmployeeProps.map((prop) => (
                  <section className="flex flex-col gap-2" key={prop.name}>
                    <label htmlFor={prop.name}>{prop.title}</label>
                    <TextfieldMultipleType
                      name={prop.name}
                      control={control}
                      rules={{ required: true }}
                      defaultValue=""
                      type={prop.type}
                      id={prop.name}
                      placeholder={prop.placeholder}
                    />
                  </section>
                ))}

                <SelectAccount>
                  <h3>Pilih Kelas</h3>
                  <OptionClassnames classes={data.data} />
                </SelectAccount>

                <SecondaryButton label="simpan data" />
              </form>
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default CreateEmployeeModal;
