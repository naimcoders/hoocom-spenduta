import { useForm } from "react-hook-form";
import { FormValues } from "@/utils/form-props";
import { useEffect } from "react";
import { modalId } from "@/utils/modal-id";
import TransitionModal from "../templates/TransitionModal";
import ReactDOM from "react-dom";
import EditEmployee from "@/onsubmit/admin/editEmployee";
import SecondaryButton from "../buttons/SecondaryButton";
import SelectAccount from "../SelectAccount";
import TextfieldMultipleType from "../textfields/TextfieldMultipleType";
import OptionClassnames from "../options/OptionClassnames";
import Loading from "../Loading";
import { useGetClassname, useGetUserById } from "@/hooks/use-admin";
import useUserStore from "@/store/userStore";
import { useActiveModal } from "@/custom-hook/useActiveModal";

type nameProp = "nip" | "fullname" | "phone" | "email";

type FormProps = {
  title: string;
  name: nameProp;
  type: string;
  placeholder: string;
  id: string;
};

const formEmployeeProps: FormProps[] = [
  {
    id: "1",
    title: "Nomor Induk Pegawai",
    name: "nip",
    type: "text",
    placeholder: "Masukkan NIP",
  },
  {
    id: "2",
    title: "Nama Lengkap",
    name: "fullname",
    type: "text",
    placeholder: "Masukkan nama lengkap",
  },
  {
    id: "3",
    title: "Nomor HP/WA",
    name: "phone",
    type: "text",
    placeholder: "Masukkan nomor HP/WA",
  },
  {
    id: "4",
    title: "Email",
    name: "email",
    type: "email",
    placeholder: "Masukkan email",
  },
];

const UpdateEmployeeModal = () => {
  const { handleSubmit, control, setValue } = useForm<FormValues>({
    mode: "onChange",
  });

  const edit = EditEmployee(handleSubmit);
  const { isThirthModal, actionThirthModal } = useActiveModal();

  const { id } = useUserStore((v) => v.employeeId);

  const { data } = useGetUserById(id);
  const role = data?.data?.role!;
  const nip = data?.data?.[role !== "ADMIN" ? "teacher" : "admin"]?.nip!;

  useEffect(() => {
    setValue("nip", nip);
    setValue("fullname", data?.data?.fullname!);
    setValue("phone", data?.data?.phone!);
    setValue("email", data?.data?.email!);
  }, [data]);

  const classnames = useGetClassname();
  if (classnames.isFetching || !classnames.data?.data) return <Loading />;

  return (
    <>
      {!modalId
        ? null
        : ReactDOM.createPortal(
            <TransitionModal
              title="edit data pegawai"
              isOpenModal={isThirthModal}
              isCloseModal={actionThirthModal}
              textColor="text-secondary"
              labelBtnTransparent="batal"
            >
              <form
                className="flex flex-col gap-4 my-4"
                onSubmit={edit.onSubmit}
              >
                {formEmployeeProps.map((prop) => (
                  <section className="flex flex-col gap-2" key={prop.name}>
                    <label htmlFor={prop.name}>{prop.title}</label>
                    <TextfieldMultipleType
                      name={prop.name}
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      type={prop.type}
                      id={prop.name}
                      placeholder={prop.placeholder}
                    />
                  </section>
                ))}

                <SelectAccount>
                  <h3>Pilih Kelas</h3>
                  <OptionClassnames classes={classnames.data.data} />
                </SelectAccount>

                <SecondaryButton label="simpan perubahan" />
              </form>
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default UpdateEmployeeModal;
