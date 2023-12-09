import emailIcon from '@/assets/emailIcon.svg'
import phoneIcon from '@/assets/phoneIcon.svg'

interface ContactProps {
  id: number
  title: string
  srcImg: string
  label: string
}

export const contactDatas: ContactProps[] = [
  {
    id: 1,
    title: 'email',
    label: 'hoocom.undipamksd@gmail.com',
    srcImg: emailIcon
  },
  {
    id: 2,
    title: 'telepon',
    label: '+04118793',
    srcImg: phoneIcon
  }
]

// form
type newProp = "fullname" | "email" | "message"
type FormProps = {
  title: string
  name: newProp
  type: string
  placeholder: string
}

export const formContactProps: FormProps[] = [
  {
    title: "Nama Lengkap",
    name: "fullname",
    placeholder: "Masukkan nama lengkap",
    type: "text",
  },
  {
    title: "Email",
    name: "email",
    placeholder: "Masukkan email",
    type: "email",
  }
]