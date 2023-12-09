type TProps = {
  classname: string;
};

const Header = ({ classname }: TProps) => {
  return (
    <header className="bg-white text-18px p-5 851px:px-56">
      <h1 className="font-lexendSemiBold capitalize">kinerja murid</h1>
      <h2 className="text-[#4D4D4D] text-14px">Kelas {classname}</h2>
    </header>
  );
};

export default Header;
