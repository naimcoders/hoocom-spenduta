import { FormValues } from '@/utils/form-props'
import { useController, UseControllerProps } from 'react-hook-form'

type TextareaProps = UseControllerProps<FormValues> & {
  id: string
}

const Textarea = (props: TextareaProps) => {
  const { field } = useController(props)

  return (
    <textarea
      id={ props.id }
      className='bg-transparent border-[1px] border-gray-highlight rounded-lg px-4 py-2 focus:outline-1 w-full focus:outline-secondary h-[8rem]'
      {...field}
    >
    </textarea>
  )
}

export default Textarea