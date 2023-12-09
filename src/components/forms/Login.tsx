import { useForm } from "react-hook-form";
import { FormValues } from "@/utils/form-props";
import SelectAccount from "../SelectAccount";
import SecondaryButton from "../buttons/SecondaryButton";
import TextfieldMultipleType from "../textfields/TextfieldMultipleType";
import SubmitLogin from "@/onsubmit/admin/submitLogin";

const FormLogin = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const { onSubmit } = SubmitLogin();

  return (
    <form
      className="form flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="flex flex-col gap-4">
        <label htmlFor="fullname" className="capitalize">
          nama lengkap
        </label>
        <TextfieldMultipleType
          name="fullname"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Masukkan nama lengkap",
            },
          }}
          defaultValue=""
          type="text"
          id="fullname"
          placeholder="masukkan nama lengkap"
        />
        {errors.fullname ? (
          <p className="text-red-500 -mt-2">{errors.fullname.message}</p>
        ) : null}
      </section>

      <section className="flex flex-col gap-4">
        <label htmlFor="password" className="capitalize">
          kata sandi
        </label>
        <TextfieldMultipleType
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Masukkan kata sandi",
            },
          }}
          defaultValue=""
          type="password"
          id="password"
          placeholder="masukkan kata sandi"
        />
        {errors.password ? (
          <p className="text-red-500 -mt-2">{errors.password.message}</p>
        ) : null}
      </section>

      <SelectAccount />
      <SecondaryButton label="masuk" />
    </form>
  );
};

export default FormLogin;
