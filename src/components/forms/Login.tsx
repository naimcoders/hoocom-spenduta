import { useForm } from "react-hook-form"
import SelectAccount from "../SelectAccount"
import { onSubmitLogin } from "@/onsubmit/on-submit-login"
import SecondaryButton from "../buttons/SecondaryButton"
import TextfieldPassword from "../textfields/TextfieldPassword"
import { FormValuesLogin } from "@/utils/form-props"
import TextfieldMultipleType from "../textfields/TextfieldMultipleType"

const FormLogin = () => {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm<FormValuesLogin>()

  const { onSubmit } = onSubmitLogin()

  return (
    <form
      className="form flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="flex flex-col gap-4">
        <label htmlFor="fullname" className="capitalize">nama lengkap</label>
        <TextfieldMultipleType
          registerProps={register}
          placeholderProp="Masukkan nama lengkap"
          htmlForPropEnglish="fullname"
          inIndonesia="nama lengkap"
          type="text"
        />
        {errors.fullname ? <p className="text-red-500">{errors.fullname.message}</p> : null}
      </section>
      
      <section className="flex flex-col gap-4">
        <label htmlFor="password" className="capitalize">kata sandi</label>
        <TextfieldPassword
          registerProp={register}
          placeholderProp="Masukkan kata sandi"
          htmlForPropEnglish="password"
          htmlForPropIndonesia="kata sandi"
        />
        {errors.password ? <p className="text-red-500">{errors.password.message}</p> : null}
      </section>

      <SelectAccount />
      <SecondaryButton label="masuk" />
    </form>
  )
}

export default FormLogin