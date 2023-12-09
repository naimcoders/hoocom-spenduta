type TLabel = {
  label: "presensi" | "penilaian";
};

const HeaderHistory = ({ label }: TLabel) => {
  return (
    <header className="bg-white p-5 851px:px-56 font-lexendSemiBold">
      <h1 className="capitalize text-18px text-center">riwayat {label}</h1>
    </header>
  );
};

export default HeaderHistory;
