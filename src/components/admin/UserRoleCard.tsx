import { Link } from "react-router-dom";

export type TCardDataUser = {
  id: number;
  title: string;
  link: string;
};

type TProps = {
  props: TCardDataUser[];
};

const UserRoleCard = ({ props }: TProps) => {
  return (
    <>
      <section className="px-5 851px:px-56">
        <h2 className="capitalize font-lexendMedium text-18px">semua data</h2>
        <section className="py-4 grid grid-cols-auto-fit gap-4">
          {props.map((dataUser) => (
            <section
              className="p-5 flex flex-col gap-4 rounded-2xl items-center bg-white"
              key={dataUser.id}
            >
              <h2 className="capitalize font-lexendMedium">{dataUser.title}</h2>
              <Link
                to={dataUser.link}
                className="capitalize text-secondary rounded-lg p-2 w-max text-[14px] hover:underline"
              >
                lihat
              </Link>
            </section>
          ))}
        </section>
      </section>
    </>
  );
};

export default UserRoleCard;
