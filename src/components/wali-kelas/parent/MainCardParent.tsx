import CardDataParent from "./CardDataParent";
import Loading from "@/components/Loading";
import TotalPeopleAPI from "@/components/TotalPeopleAPI";
import EmptyDatas from "@/components/EmptyDatas";
import { useGetStudentByClass } from "@/hooks/use-wali-kelas";
import { TSingleClassname } from "@/types/componentTypes";

const MainCardParent = ({ classname }: TSingleClassname) => {
  const { data, isLoading } = useGetStudentByClass(classname);
  if (isLoading) return <Loading />;
  const lengthData: number = data?.data?.length ?? 0;

  return (
    <section className="851px:px-56 px-5 flex flex-col gap-4">
      <TotalPeopleAPI labelAPI={lengthData} />
      {lengthData < 1 ? (
        <EmptyDatas />
      ) : (
        <CardDataParent students={data?.data} />
      )}
    </section>
  );
};

export default MainCardParent;
