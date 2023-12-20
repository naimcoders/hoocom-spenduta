import { useNavigate, useParams } from "react-router-dom";
import { useReadBobot } from "@/hooks/use-assessment";
import { setUriHistory } from "@/types/componentTypes";
import Loading from "@/components/Loading";
import ScoringLesson from "@/components/guru-mapel/assessment/ScoringLesson";
import ScoringStudent from "@/components/guru-mapel/assessment/ScoringStudent";
import HeaderPresenceAndAssessment from "@/components/guru-mapel/presensi/Header";

type TParams = {
  classname: string;
  lesson: string;
};

const AssessmentPage = () => {
  const navigate = useNavigate();
  const { classname, lesson } = useParams() as TParams;
  const headerTitle = `Penilaian - ${classname} ${lesson}`;
  const uri = setUriHistory("penilaian", classname, lesson);
  const handleHIstory = () => navigate(uri);

  const { data, isLoading, isError, error } = useReadBobot(classname, lesson);
  const getData = data?.data;

  return (
    <>
      {isError ? (
        <p>{error.message}</p>
      ) : isLoading ? (
        <Loading />
      ) : (
        <main className="flex flex-col gap-4">
          <HeaderPresenceAndAssessment
            title={headerTitle}
            onClick={handleHIstory}
          />
          {!getData?.bobot ? (
            <ScoringLesson bobotId={getData?.id!} />
          ) : (
            <ScoringStudent classname={classname} />
          )}
        </main>
      )}
    </>
  );
};

export default AssessmentPage;
