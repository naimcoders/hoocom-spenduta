import profileDefault from '@/assets/profileDefault.webp'
import { useGetUserByIdStore } from '@/store/getUserByIdStore'
import { timeGreeting } from '@/utils/time-greeting'
import { useEffect } from 'react'

const HeaderRole = () => {
  const greeting = timeGreeting()
  const uri = import.meta.env.VITE_URI_BACKEND

  const userId: string | null = window.localStorage.getItem('userId')
  const foundUser = useGetUserByIdStore(state => state.userById)
  const fetchUser = useGetUserByIdStore(state => state.fetch)

  useEffect(() => {
    fetchUser(`${uri}/api/general/getuser/${userId}`)
  }, [])

  return (
    <header className="px-5 py-6 flex items-center justify-between bg-white shadow-cardShadow 851px:px-56">
      <div>
        <h1 className="capitalize font-lexendMedium text-16px text-gray-highlight">
          selamat { greeting }
        </h1>
        <h2 className="font-lexendSemiBold text-20px capitalize">
          { foundUser.fullname }
        </h2>
      </div>
      <img
        src={profileDefault}
        alt="profile"
        className='header-role-profile w-8 cursor-pointer'
        title='profil'
      />
    </header>
  )
}

export default HeaderRole