import '@/styles/index.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import { dataBanners } from '@/constants/Banner-props'

const Banner = () => {
  const setSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <section>
      <Slider {...setSlider}>
        {dataBanners.map(banner => (
          <img src={ banner.src } alt="banner" className='aspect-square 600px:h-banner 600px:w-banner object-cover' key={ banner.id } />
        ))}
      </Slider>
    </section>
  )
}

export default Banner