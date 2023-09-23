import { cardDataUser } from "@/utils/admin-props"
import { Link } from "react-router-dom"

const UserRoleCard = () => {
  return (
    <section className="py-4 grid grid-cols-auto-fit gap-4">
      {cardDataUser.map(dataUser => (
        <section className="p-5 flex flex-col gap-4 rounded-2xl bg-gradient-to-tr from-[#7F7FD5] to-[#86A8E7] shadow-cardShadow" key={dataUser.id}>
          <h2 className="capitalize text-primary text-center font-lexendMedium">{dataUser.title}</h2>
          <Link
            to={dataUser.link}
            className="capitalize bg-primary rounded-lg py-2 w-full block text-center text-15px"
          >
            lihat
          </Link>
        </section>
      ))}
    </section>
  )
}

export default UserRoleCard