import { FormValuesContactUs } from "@/utils/form-props"
import SecondaryButton from "../buttons/SecondaryButton"
import Textarea from "../textfields/Textarea"
import { useForm } from "react-hook-form"
import { onSubmitContact } from "@/onsubmit/on-submit-contact"
import TextfieldMultipleType from "../textfields/TextfieldMultipleType"

const FormContact = () => {
	const {
		register,
		handleSubmit
	} = useForm<FormValuesContactUs>()

	const { onSubmit } = onSubmitContact()
	
  return (
		<form className="bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-2">
				<label htmlFor="fullname" className="capitalize">nama lengkap</label>
				<TextfieldMultipleType
					registerProp={register}
					htmlForPropEnglish="fullname"
					htmlForPropIndonesia="nama lengkap"
					placeholderProp="Masukkan nama lengkap"
					type="text"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="capitalize">email</label>
				<TextfieldMultipleType
					registerProp={register}
					htmlForPropEnglish="email"
					htmlForPropIndonesia="email"
					placeholderProp="Masukkan email"
					type="email"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="message" className="capitalize">pesan</label>
				<Textarea
					registerProp={register}
					htmlForPropEnglish="message"
					htmlForPropIndo="pesan"
				/>
			</div>
			<SecondaryButton label="kirim" />
		</form>
	)
}

export default FormContact