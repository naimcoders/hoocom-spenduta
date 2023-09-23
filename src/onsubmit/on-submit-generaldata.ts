import { FormValuesGeneralData } from "@/utils/form-props"
import { SubmitHandler } from "react-hook-form"

export const onSubmitGeneralData = () => {
  const onSubmit: SubmitHandler<FormValuesGeneralData> = async (e) => {
    console.log(e)
  }
  
  return { onSubmit }
}