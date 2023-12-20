import FormContact from "@/components/contactus/FormContact";
import FooterHome from "@/components/footers/FooterHome";
import HeaderHome from "@/components/headers/HeaderHome";
import { contactDatas } from "@/utils/contact-props";

const ContentComponent = () => {
  return (
    <section className="flex flex-col gap-6">
      <section className="flex flex-col gap-4 text-justify">
        <h1 className="uppercase font-lexendSemiBold text-20px">
          hubungi kami
        </h1>
        <p>
          Untuk mengetahui lebih lanjut tentang kami dan layanan kami, silakan
          isi formulir di sini dan kirimkan email kepada kami. Atau,
        </p>
      </section>
      {contactDatas.map((contact) => (
        <div className="flex flex-col gap-2 mb-4" key={contact.id}>
          <h2 className="font-lexendMedium capitalize">{contact.title}</h2>
          <div className="flex items-center gap-4">
            <img src={contact.srcImg} alt="contact icon" className="w-8" />
            <p>{contact.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const ContactUs = () => {
  return (
    <main>
      <HeaderHome pageName="contactus" />
      <section className="text-dark p-5 851px:px-48 851px:py-8 grid grid-cols-auto-fit gap-8">
        <ContentComponent />
        <FormContact />
      </section>
      <FooterHome />
    </main>
  );
};

export default ContactUs;
