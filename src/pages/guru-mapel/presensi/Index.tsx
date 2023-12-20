import CardIndexPresensi from "@/components/guru-mapel/presensi/CardIndex";
import HeaderPresenceAndAssessment from "@/components/guru-mapel/presensi/Header";
import { setUriHistory } from "@/types/componentTypes";
import { useNavigate, useParams } from "react-router-dom";

type TParams = {
  classname: string;
  lesson: string;
};

const PresensiPage = () => {
  const navigate = useNavigate();
  const { classname, lesson } = useParams() as TParams;
  const headerTitle = `Presensi - ${classname} ${lesson}`;

  const uri = setUriHistory("presensi", classname, lesson);
  const handleHIstory = () => navigate(uri);

  return (
    <main className="flex flex-col gap-6">
      <HeaderPresenceAndAssessment
        title={headerTitle}
        onClick={handleHIstory}
      />
      <CardIndexPresensi classname={classname} lesson={lesson} />
    </main>
  );
};

export default PresensiPage;
