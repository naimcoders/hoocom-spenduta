import bannerTest from '@/assets/bannerTest.webp'

const News = () => {
  return (
    <section className="News flex flex-col gap-6 px-5 851px:px-48">
      <img
        src={bannerTest}
        alt="news image"
        className='w-full rounded-2xl h-80 object-cover'
      />
      <div className='text-justify'>
        <h2 className="capitalize text-dark font-lexendSemiBold text-20px mb-2">
          judul beritanya
        </h2>
        <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ea ullam cupiditate laborum? Maiores eveniet corrupti temporibus illo doloribus nesciunt sint sunt facilis cupiditate dolore nobis quam sequi aperiam ex distinctio eligendi aut magnam perspiciatis, voluptates, recusandae consectetur est mollitia hic ab. Placeat eveniet doloremque repudiandae hic minus aut animi!</p>
      </div>
    </section>
  )
}

export default News