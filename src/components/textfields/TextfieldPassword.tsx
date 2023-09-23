import { useState } from 'react'
import closeEyeIcon from '@/assets/closeEye.svg'
import openEyeIcon from '@/assets/openEye.svg'

interface TextfieldProps {
  registerProp: Function
  placeholderProp: string
  htmlForPropEnglish: string
  htmlForPropIndonesia: string
}

const TextfieldPassword = ({
  registerProp, htmlForPropEnglish, placeholderProp, htmlForPropIndonesia
}: TextfieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleShowPassword = () => setShowPassword(!showPassword)

  return (
    <div className="relative">
      <input
        type={!showPassword ? 'password' : 'text'}
        id={htmlForPropEnglish}
        placeholder={placeholderProp}
        className='bg-transparent border-[1px] border-gray-highlight rounded-lg px-4 py-2 placeholder:text-gray-highlight focus:outline-1 w-full focus:outline-secondary'
        {...registerProp(htmlForPropEnglish, {
          required: {
            value: true, message: `Masukkan ${htmlForPropIndonesia}`
          }
        })}
      />
      <img
        src={!showPassword ? closeEyeIcon : openEyeIcon}
        alt="show password"
        className='hide-password w-5 absolute top-3 right-4 cursor-pointer'
        onClick={handleShowPassword}
      />
    </div>
  )
}

export default TextfieldPassword