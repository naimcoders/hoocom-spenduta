import SecondaryButton from "../buttons/SecondaryButton"
import TextfieldMultipleType from "../textfields/TextfieldMultipleType"
import Textarea from "../textfields/Textarea"
import { FormValues } from "@/utils/form-props"
import { useForm } from "react-hook-form"
import { formContactProps } from "@/utils/contact-props"

const FormContact = () => {
  const {
    control,
    handleSubmit
  } = useForm<FormValues>({ mode: "onChange" })

  const onSubmit = handleSubmit(e => {
    console.log(e)
  })

  return (
    <form
      className="bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-6"
      onSubmit={onSubmit}
    >
      {formContactProps.map((prop) => (
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
  )
}

export default FormContact
