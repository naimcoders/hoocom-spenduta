import SecondaryButton from "../buttons/SecondaryButton";
import TextfieldMultipleType from "../textfields/TextfieldMultipleType";
import Textarea from "../textfields/Textarea";
import { useContact } from "@/custom-hook/useContact";
import Loading from "../Loading";
import { useEffect } from "react";

type TName = "fullname" | "email" | "message";
type TForm = {
  title: string;
  name: TName;
  type: string;
  placeholder: string;
};

export const arrDatas: TForm[] = [
  {
    title: "Nama Lengkap",
    name: "fullname",
    placeholder: "Masukkan nama lengkap",
    type: "text",
  },
  {
    title: "Email",
    name: "email",
    placeholder: "Masukkan email",
    type: "email",
  },
];

const WindowToUp = (isLoading: boolean) => {
  return useEffect(() => {
    if (isLoading) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [isLoading]);
};

const FormContact = () => {
  const { control, onSubmit, isLoading } = useContact();
  WindowToUp(isLoading);
  if (isLoading) return <Loading />;

  return (
    <form
      className="bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-6 text-15px"
      onSubmit={onSubmit}
    >
      {arrDatas.map((prop) => (
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

      <section className="flex flex-col gap-2">
        <label htmlFor="message">Pesan</label>
        <Textarea
          id="message"
          name="message"
          control={control}
          defaultValue=""
          rules={{ required: true }}
        />
      </section>

      <SecondaryButton label="kirim pesan" />
    </form>
  );
};

export default FormContact;
