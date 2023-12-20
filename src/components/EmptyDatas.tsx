type EmptyDatasProps = {
  label?: string;
  bgColor?: string;
};

const EmptyDatas = ({ label, bgColor }: EmptyDatasProps) => {
  return (
    <section
      className={`${
        !bgColor ? "bg-white" : bgColor
      } p-5 rounded-lg text-center font-lexendMedium w-full`}
    >
      <h2>Tidak ada data {label}</h2>
    </section>
  );
};

export default EmptyDatas;
