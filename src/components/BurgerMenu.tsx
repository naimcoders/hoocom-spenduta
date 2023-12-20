import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { dataLinks } from "@/utils/header-link-props";

type BurgerMenuProps = {
  openBurgerMenu: boolean;
};

const BurgerMenu = ({ openBurgerMenu }: BurgerMenuProps) => {
  const burgerMenuContainer = document.querySelector("#burger-menu");
  return (
    <>
      {!openBurgerMenu
        ? null
        : !burgerMenuContainer
        ? null
        : ReactDOM.createPortal(
            <section className="absolute top-[12%] right-[5%] flex flex-col gap-6 bg-dark-modal p-6 rounded-lg z-[2]">
              {dataLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.to}
                  className="text-primary hover:text-secondary"
                >
                  {link.indonesianTitle}
                </Link>
              ))}
            </section>,
            burgerMenuContainer
          )}
    </>
  );
};

export default BurgerMenu;
