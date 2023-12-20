import {
  dataClients,
  handleSlidesToShow
} from '@/utils/client-props'
import Slider from 'react-slick'
import NextArrow from './slick-custom/NextArrow'
import PrevArrow from './slick-custom/PrevArrow'
import { useEffect, useState } from 'react'

const Clients = () => {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [innerWidth])

  const slidesToShow: number = handleSlidesToShow(innerWidth)
  const setSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />
  }
  
  return (
    <section className="my-10">
      <h1 className='font-lexendSemiBold text-20px mb-6 text-center text-dark'>Klien kami</h1>
      
      <section className='scroll-client p-4'>
        <Slider {...setSlider}>
          {dataClients.map(client => (
            <div key={client.id}>
              <img src={client.src} alt="client" className='rounded-50% w-24 h-24 m-auto mb-2' />
              <h2 className='text-center'>{ client.title }</h2>
            </div>
          ))}
        </Slider>
      </section>
    </section>
  )
}

export default Clients