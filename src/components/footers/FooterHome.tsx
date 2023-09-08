import { Link } from "react-router-dom"
import { footerLinks } from "@/constants/footer-link-props"

const FooterHome = () => {
  return (
    <section className="600px:px-40 bg-secondary py-4 601px:px-4 mt-12">
      <div className="flex flex-col gap-6 600px:flex-row 600px:gap-14">
        {footerLinks.map(link => (
          <div className="flex flex-col gap-5" key={link.id}>
            <h2 className="capitalize text-dark text-18px font-lexendSemiBold">
              { link.title }
            </h2>
            <nav className="flex flex-col gap-1">
              {link.links.map(subLink => (
                <Link
                  to={ subLink.to } className="text-white block hover:text-dark" key={ subLink.id }
                >
                  { subLink.title }
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FooterHome