const Button = () => {
  return (
    <>
      <button className="bg-orange-100 text-orange-500 capitalize text-[14px] px-4 py-1 rounded-lg none-highlight">
        izin
      </button>
    </>
  );
};

const CardActionPresensi = () => {
  return (
    <section className="flex gap-2">
      <Button />
    </section>
  );
};

export default CardActionPresensi;
