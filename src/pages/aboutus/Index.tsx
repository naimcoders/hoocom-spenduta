import whyHoocomImg from '@/assets/whyHoocom.webp'
import FooterHome from '@/components/footers/FooterHome'
import HeaderHome from "@/components/headers/HeaderHome"

const AboutUs = () => {
  return (
    <main>
      <HeaderHome pageName="aboutus" />
      <section className="text-dark p-5 851px:mb-24 pt-5">
        <h1 className="uppercase font-lexendSemiBold text-20px mb-8 851px:text-center">
          hoocom aplikasi pendidikan
        </h1>
        <div className="text-16px flex flex-col text-justify gap-4 851px:px-40">
          <p>
            Hoocom adalah sebuah aplikasi inovatif hasil dari proyek magang kami di PT Grocee. Terdiri dari empat individu yang berasal dari Universitas Dipa Makassar, kami memiliki semangat yang sama untuk menghadirkan perubahan dalam dunia pendidikan.
          </p>
          <p>
            Dengan latar belakang yang beragam dalam ilmu komputer, desain, dan manajemen, kami menggabungkan pengetahuan dan kreativitas kami untuk menciptakan Hoocom. Tujuan kami adalah memudahkan komunikasi antara orang tua, guru, dan siswa, serta meningkatkan kualitas pendidikan.
          </p>
          <p>
            Kami percaya bahwa pendidikan adalah kunci untuk masa depan yang cerah. Dengan Hoocom, kami berkomitmen untuk memberikan solusi yang inovatif dan berdaya guna bagi seluruh komunitas pendidikan.
          </p>
        </div>
      </section>
      <section className="p-5 text-dark text-justify grid gap-8 grid-cols-auto-fit 851px:px-40 851px:mb-24">
        <div>
          <h1 className="font-lexendSemiBold text-20px mb-4">
            Kenapa <span className="uppercase">hoocom?</span>
          </h1>
          <p>
            Aplikasi HOOCOM mengatasi tantangan komunikasi antara orang tua dan sekolah. Sistem Ini menyediakan platform sentral untuk berbagi informasi secara real-time, pemantauan progres siswa, dan kolaborasi yang efisien. Dengan demikian, HOOCOM memperkuat kemitraan pendidikan, memaksimalkan dukungan siswa, serta menciptakan lingkungan belajar yang terintegrasi dan produktif.
          </p>
        </div>
        <img
          src={whyHoocomImg}
          alt="campus"
          className='w-full h-60 shadow-md 601px:h-full object-cover rounded-2xl'
        />
      </section>
      <section className='text-dark p-5 851px:px-40'>
        <h1 className='text-20px font-lexendSemiBold mb-8 text-center'>
          Keunggulan
        </h1>
        <div className='grid grid-cols-auto-fit gap-8 851px:gap-10'>
          <div className='text-justify'>
            <h2 className='font-lexendMedium text-18px capitalize mb-2'>efektif</h2>
            <p>Memungkinkan komunikasi langsung antara orang tua dan sekolah, memastikan informasi penting tersampaikan dengan cepat</p>
          </div>
          <div className='text-justify'>
            <h2 className='font-lexendMedium text-18px capitalize mb-2'>transparan</h2>
            <p>Memungkinkan komunikasi langsung antara orang tua dan sekolah, memastikan informasi penting tersampaikan dengan cepat</p>
          </div>
          <div className='text-justify'>
            <h2 className='font-lexendMedium text-18px capitalize mb-2'>progres</h2>
            <p>Memungkinkan komunikasi langsung antara orang tua dan sekolah, memastikan informasi penting tersampaikan dengan cepat</p>
          </div>
        </div>
      </section>
      <FooterHome />
    </main>
  )
}

export default AboutUs