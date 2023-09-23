import { ButtonLabelProps } from "@/utils/button-props"

const SecondaryButton = ({ label }: ButtonLabelProps) => {
  return (
    <button
      className='capitalize bg-secondary text-primary p-2 rounded-lg mt-4 hover:bg-blue-600'
    >
      { label }
    </button>
  )
}

export default SecondaryButton