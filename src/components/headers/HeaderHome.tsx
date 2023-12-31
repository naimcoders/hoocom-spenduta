import {
  HeaderProps,
  dataLinks
} from '@/utils/header-link-props'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BurgerMenu from "@/components/BurgerMenu"
import hoocomLogo from '@/assets/hoocomLogo.webp'

const HeaderHome = ({ pageName }: HeaderProps) => {
  const [burgerActive, setBurgerActive] = useState<boolean>(false)

  const handleBurgerMenuAnimate = () => {
    setBurgerActive(!burgerActive)
  }

  const navigate = useNavigate()
  const navigateToHomepage = () => navigate('/')

  return (
    <header className='flex items-center justify-between p-5 bg-white 851px:px-48 m-auto'>
      <div className='flex items-center gap-4 text-20px cursor-pointer' title='Kembali ke beranda' onClick={navigateToHomepage}>
        <img src={hoocomLogo} alt="Hoocom logo" className='w-3rem' />
        <h1 className='uppercase font-lexendSemiBold text-secondary'>hoocom</h1>
      </div>
      
      <nav className='flex gap-8 850px:hidden'>
        {dataLinks.map(link => (
          <Link
            key={ link.id }
            to={ link.to }
            className={
              `${pageName === link.englishTitle ? 'text-secondary' : 'text-dark hover:text-secondary'}
              cursor-pointer`
            }
          >
            { link.indonesianTitle }
          </Link>
        ))}
      </nav>

      <div
        className='Burger-menu 850px:flex 850px:flex-col gap-1 851px:hidden'
        onClick={handleBurgerMenuAnimate}
      >
        <span
          className={
            `${burgerActive ? 'rotate-45 translate-y-1' : null} w-8 h-1 transition duration-100 ease-out rounded-lg bg-dark block `
          }
        />
        <span
          className={
            `${burgerActive ? 'hidden' : null} w-8 h-1 transition duration-100 ease-out rounded-lg bg-dark block `
          }
        />
        <span
          className={
            `${burgerActive ? '-rotate-45 -translate-y-1' : null} w-8 h-1 transition duration-100 ease-out rounded-lg bg-dark block `
          }
        />
      </div>
      
      <BurgerMenu openBurgerMenu={burgerActive} />
    </header>
  )
}

export default HeaderHome