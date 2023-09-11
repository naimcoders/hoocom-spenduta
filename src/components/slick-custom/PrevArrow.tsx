import prevArrow from '@/assets/caret-left.svg'
import { FC, MouseEventHandler } from 'react'

interface PrevArrowProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

const PrevArrow: FC<PrevArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='absolute top-[50%] left-[5%] z-[1] -translate-y-[50%]'
      title='Sebelumnya'
    >
      <img
        src={prevArrow}
        alt="prev"
      />
    </button>
  )
}

export default PrevArrow