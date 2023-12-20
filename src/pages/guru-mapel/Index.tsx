import OptionClassAndLesson from "@/components/guru-mapel/ClassList";
import HeaderRole from "@/components/headers/HeaderRole";
import PeriodInfromation from "@/components/wali-kelas/PeriodInfromation";
import CardFeature from "@/components/guru-mapel/CardFeature";

const HomeGuruMapel = () => {
  return (
    <main className="flex flex-col gap-8">
      <HeaderRole />
      <PeriodInfromation label="guru-mapel" />
      <OptionClassAndLesson />
      <CardFeature />
    </main>
  );
};

export default HomeGuruMapel;
