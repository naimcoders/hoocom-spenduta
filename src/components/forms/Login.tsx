import { setDefaultValues, textFieldLogin } from "@/utils/form-props"
import { useForm } from "react-hook-form"
import SelectAccount from "../SelectAccount"
import { onSubmitLogin } from "@/onsubmit/on-submit-login"

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(setDefaultValues)

  const { onSubmit } = onSubmitLogin()

  return (
    <form
      className="form flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {textFieldLogin.map(textfield => (
        <div className='flex flex-col gap-4' key={textfield.id}>
          <label
            htmlFor={textfield.htmlFor}
            className='capitalize'
          >{textfield.label}</label>
          <input
            type={textfield.htmlFor !== 'password' ? 'text' : 'password'}
            id={textfield.htmlFor}
            placeholder={textfield.placeholder}
            className='bg-transparent border-[1px] border-gray-highlight rounded-lg px-4 py-2 placeholder:text-gray-highlight focus:outline-1 focus:outline-secondary'
            {...register(
              textfield.htmlFor === 'fullname' ? 'fullname' : 'password', {
                required: {
                  value: true, message: `Masukkan ${textfield.label}`
                }
              }
            )}
          />
          <p className='text-red-500 -mt-2 text-15px'>
            {errors[textfield.htmlFor === 'fullname' ? 'fullname' : 'password']?.message}
          </p>
        </div>
      ))}

      <SelectAccount />
      <button className='capitalize bg-secondary text-primary p-3 rounded-lg mt-4 hover:bg-blue-600'>masuk</button>
    </form>
  )
}

export default FormLogin