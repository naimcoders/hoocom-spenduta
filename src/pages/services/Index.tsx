import HeaderHome from "@/components/headers/HeaderHome"
import LeftToRightSection from "@/components/services/LeftToRightSection"
import HoocomServiceImg from '@/assets/whyHoocom.webp'
import {
  parentRole,
  homeroomTeacherRole,
  lessonTeacherRole,
  adminRole
} from "@/constants/service-role-props"
import RightToLeftSectionList from "@/components/services/RightToLeftSectionList"
import LeftToRightSectionList from "@/components/services/LeftToRightSectionList"
import Testimony from "@/components/services/Testimony"
import FooterHome from "@/components/footers/FooterHome"

const Services = () => {
  return (
    <section>
      <HeaderHome pageName="services" />
      <LeftToRightSection
        title="HOOCOM"
        srcImage={ HoocomServiceImg }
        altImage="HOOCOM service image"
        paragraph="HOOCOM adalah aplikasi platform yang dirancang khusus untuk memfasilitasi komunikasi dan kolaborasi antara orang tua dan lembaga pendidikan. Ini bertujuan untuk memungkinkan pertukaran informasi yang efektif, pemantauan perkembangan siswa, serta membangun kemitraan yang kuat antara orang tua dan sekolah guna mendukung pendidikan yang holistik dan berkelanjutan."
      />
      <RightToLeftSectionList
        title={ parentRole.title }
        srcImg={ parentRole.srcImg }
        listFeatures={ parentRole.listFeatures }
      />
      <LeftToRightSectionList
        title={ homeroomTeacherRole.title }
        srcImg={ homeroomTeacherRole.srcImg }
        listFeatures={ homeroomTeacherRole.listFeatures }
      />
      <RightToLeftSectionList
        title={ lessonTeacherRole.title }
        srcImg={ lessonTeacherRole.srcImg }
        listFeatures={ lessonTeacherRole.listFeatures }
      />
      <LeftToRightSectionList
        title={ adminRole.title }
        srcImg={ adminRole.srcImg }
        listFeatures={ adminRole.listFeatures }
      />
      <Testimony />
      <FooterHome />
    </section>
  )
}

export default Services