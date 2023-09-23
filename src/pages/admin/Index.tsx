import GeneralData from "@/components/admin/GeneralData"
import UserRoleCard from "@/components/admin/UserRoleCard"
import HeaderRole from "@/components/headers/HeaderRole"

const HomeAdmin = () => {
  return (
    <main>
      <HeaderRole />
      <GeneralData />
      <section className="px-5 851px:px-56">
        <h2 className="capitalize font-lexendMedium text-18px">semua data</h2>
        <UserRoleCard />
      </section>
    </main>
  )
}

export default HomeAdmin