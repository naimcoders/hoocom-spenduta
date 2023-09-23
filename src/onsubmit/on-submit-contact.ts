import { FormValuesContactUs } from "@/utils/form-props"
import { SubmitHandler } from "react-hook-form"

export const onSubmitContact = () => {
  const onSubmit: SubmitHandler<FormValuesContactUs> = async (e) => {
    try {
      console.log(e)
    } catch(error) {
      console.log(error)
    }
  }
  
  return { onSubmit }
}