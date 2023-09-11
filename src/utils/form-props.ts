interface InitialValueProps {
  defaultValues: {
    fullname: string
    password: string
  }
}

export const setDefaultValues: InitialValueProps = {
  defaultValues: { fullname: '', password: '' }
}

interface TextFieldProps {
  id: number
  label: string
  htmlFor: string
  placeholder: string
}

export const textFieldLogin: TextFieldProps[] = [
  {
    id: 1,
    label: 'nama lengkap',
    htmlFor: 'fullname',
    placeholder: 'Masukkan nama lengkap'
  },
  {
    id: 2,
    label: 'kata sandi',
    htmlFor: 'password',
    placeholder: 'Masukkan kata sandi'
  }
]