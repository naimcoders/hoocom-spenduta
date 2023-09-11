import HeaderHome from "@/components/headers/HeaderHome"
import FooterHome from "@/components/footers/FooterHome"
import EmailImg from "@/assets/mail.webp"
import PhoneImg from "@/assets/phone.webp"
import FormContact from "@/components/contactus/FormContact"

const ContactUs = () => {
  return (
    <main className="ContactUs-page">
      <HeaderHome pageName="contactus"/>
      <section className="text-dark grid grid-cols-auto-fit 601px:p-5 600px:mb-24 pt-20">
        <div>
        <h1 className="uppercase font-lexendSemiBold text-20px mb-8 600px:text-left mx-40 ">
          Hubungi Kami
        </h1>
        <div className="text-16px flex flex-col text-justify gap-4 600px:px-40">
          <p>
          Untuk mengetahui lebih lanjut tentang kami
          dan layanan kami, silahkan isi formulir di sini
          dan kirimkan email kepada kami. Atau, 
          </p>
        </div>

        <div className="mt-10 mx-40">
          <p>
            Email Kami Disini
          </p>
          <div className="flex items-center">
          <img
          src={EmailImg}
          alt="Email"
          className="w-10 h-10"
          />
          <p className="mx-5">
            hoocom.undipamksd@gmail.com
          </p>
          </div>
        </div>

        <div className="mt-10 mx-40">
          <p>
            Telepon Kami Disini
          </p>
          <div className="flex items-center">
          <img
          src={PhoneImg}
          alt="Phone"
          className="w-10 h-10"
          />
          <p className="mx-5">
            +04118793
          </p>
          </div>
        </div>
        </div>

        <FormContact />

      </section>
      <FooterHome />
    </main>
  )
}

export default ContactUs