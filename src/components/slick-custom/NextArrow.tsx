import { FC, MouseEventHandler } from 'react'
import nextArrow from '@/assets/caret-right.svg'

interface NextArrowProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

const NextArrow: FC<NextArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='absolute top-[50%] right-[5%] -translate-y-[50%] z-[1]'
      title='Selanjutnya'
    >
      <img
        src={nextArrow}
        alt="next"
      />
    </button>
  )
}

export default NextArrow