import Banner from "@/components/Banner"
import Clients from "@/components/Clients"
import News from "@/components/News"
import FooterHome from "@/components/footers/FooterHome"
import HeaderHome from "@/components/headers/HeaderHome"

const Home = () => {
  return (
    <main>
      <HeaderHome pageName="home" />
      <Banner />
      <Clients />
      <News />
      <FooterHome />
    </main>
  )
}

export default Home