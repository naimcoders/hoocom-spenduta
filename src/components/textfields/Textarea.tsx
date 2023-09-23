interface TextfieldProps {
  registerProp: Function
  htmlForPropEnglish: string
  htmlForPropIndo: string
}

const Textarea = ({ registerProp, htmlForPropEnglish, htmlForPropIndo }: TextfieldProps) => {
  return (
    <textarea
      className='bg-transparent border-[1px] border-gray-highlight rounded-lg px-4 py-2 focus:outline-1 w-full focus:outline-secondary h-[8rem]'
      {...registerProp(htmlForPropEnglish, {
        required: {
          value: true, message: `Masukkan ${htmlForPropIndo}`
        }
      })}
    >
    </textarea>
  )
}

export default Textarea