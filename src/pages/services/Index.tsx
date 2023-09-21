import HeaderHome from "@/components/headers/HeaderHome"
import LeftToRightSection from "@/components/services/LeftToRightSection"
import whyhoocom from '@/assets/whyservice.webp';
import Testimony from "@/components/services/Testimony"
import FooterHome from "@/components/footers/FooterHome"
import CardRole from "@/components/services/CardRole"

const Services = () => {
  return (
    <main>
      <HeaderHome pageName="services" />
      <LeftToRightSection
        title="HOOCOM"
        srcImage={ whyhoocom }
        altImage="student"
        paragraph="HOOCOM adalah aplikasi platform yang dirancang khusus untuk memfasilitasi komunikasi dan kolaborasi antara orang tua dan lembaga pendidikan. Ini bertujuan untuk memungkinkan pertukaran informasi yang efektif, pemantauan perkembangan siswa, serta membangun kemitraan yang kuat antara orang tua dan sekolah guna mendukung pendidikan yang holistik dan berkelanjutan."
      />
      <CardRole />
      <Testimony />
      <FooterHome />
    </main>
  )
}

export default Services