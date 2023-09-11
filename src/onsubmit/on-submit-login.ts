import { useLoginStore } from "@/store/loginStore"

interface ResultProps {
  fullname: string
  password: string
}

export const onSubmitLogin = () => {
  const accountType = useLoginStore(state => state.accountType)

  const onSubmit = (event: ResultProps) => {
    try {
      const { fullname, password } = event
  
      console.log({ fullname, password, accountType })
    } catch (error) {
      console.log(error)
    }
  }

  return { onSubmit }
}