import '@/styles/index.css'
import Slider from 'react-slick'
import { dataBanners } from '@/utils/banner-props'

const Banner = () => {
  const setSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  return (
    <section>
      <Slider {...setSlider}>
        {dataBanners.map(banner => (
          <img src={ banner.src } alt="banner" className='aspect-square 600px:h-banner object-cover' key={ banner.id } />
        ))}
      </Slider>
    </section>
  )
}

export default Banner