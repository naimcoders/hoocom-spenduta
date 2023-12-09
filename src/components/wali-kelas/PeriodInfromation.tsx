import { useGetGeneralData } from "@/hooks/use-admin";
import Loading from "../Loading";
import { useAuth } from "@/store/userStore";

type TProps = {
  label: "wali-kelas" | "guru-mapel";
};

const PeriodInfromation = ({ label }: TProps) => {
  const classname = useAuth((v) => v.user?.teacher?.className);
  const { data, isLoading } = useGetGeneralData();

  if (isLoading) return <Loading />;
  const getData = data?.data!;

  return (
    <section className="flex gap-1 flex-col 600px:flex-row 600px:items-center 600px:justify-between 851px:px-56 px-5">
      <section className="text-15px">
        <h2>Periode {getData.period}</h2>
        <h2>Semester {getData.semester}</h2>
      </section>
      {label !== "wali-kelas" ? null : (
        <h2 className="bg-blue-100 text-[14px] w-max px-4 py-1 rounded-2xl text-secondary mt-4 cursor-default">
          Kelas {classname}
        </h2>
      )}
    </section>
  );
};

export default PeriodInfromation;
