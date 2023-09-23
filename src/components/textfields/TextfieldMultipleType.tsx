type TextfieldProps = {
  placeholderProp: string
  htmlForPropEnglish: string
  type: string
  inIndonesia: string
  registerProps: Function
}

const TextfieldMultipleType = ({
  htmlForPropEnglish,
  placeholderProp,
  type,
  registerProps,
  inIndonesia
}: TextfieldProps) => {
  return (
    <input
      type={type}
      id={htmlForPropEnglish}
      placeholder={placeholderProp}
      className='bg-transparent border-[1px] border-gray-highlight rounded-lg px-3 py-2 placeholder:text-gray-highlight focus:outline-1 w-full focus:outline-secondary placeholder:text-15px'
      {...registerProps(htmlForPropEnglish, {
        required: {
          value: true,
          message: `Masukkan ${inIndonesia}`
        }
      })}
    />
  )
}

export default TextfieldMultipleType