import { useParams } from "react-router-dom";
import Header from "@/components/wali-kelas/student-performance/Header";
import Options from "@/components/wali-kelas/student-performance/Options";
import CardPerformance from "@/components/wali-kelas/student-performance/CardPerformance";
import { TSingleClassname } from "@/types/componentTypes";

const StudentPerformancePage = () => {
  const { classname } = useParams() as TSingleClassname;

  return (
    <main className="flex flex-col gap-6">
      <Header classname={classname} />
      <Options />
      <CardPerformance />
    </main>
  );
};

export default StudentPerformancePage;
