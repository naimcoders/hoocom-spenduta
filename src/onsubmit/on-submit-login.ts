import axios from "axios"
import { useLoginStore } from "@/store/loginStore"
import { SubmitHandler } from "react-hook-form"
import { fbAuth } from "@/configs/firebase"
import { useNavigate } from "react-router-dom"

type ResultProps = {
  fullname: string
  password: string
}

export const onSubmitLogin = () => {
  const navigate = useNavigate()
  const accountType = useLoginStore(state => state.accountType)
  const URL_LOGIN: string = import.meta.env.VITE_LOGIN_EMPLOYEE_URL

  const onSubmit: SubmitHandler<ResultProps> = async event => {
    try {
      const { fullname, password } = event

      const result = await axios.post(URL_LOGIN, {
        fullname, password, accountType
      })

      const token = result.data.token
      await fbAuth.signInWithCustomToken(token)

      const userId: string = result.data.id
      const userRole: string = result.data.role

      window.localStorage.setItem('userId', userId)
      window.localStorage.setItem('userRole', userRole)
      
      navigate(`/${accountType}`)
    } catch (error) {
      const err = error as Error
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data?.message)
      } else {
        console.error(err.message)
      }
    }
  }

  return { onSubmit }
}