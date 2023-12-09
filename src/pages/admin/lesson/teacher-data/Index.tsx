import CardTeacherData from "@/components/admin/lesson/CardTeacherData";
import { HeaderCreateData } from "@/components/headers/HeaderCreateData";
import { useParams } from "react-router-dom";

type TParams = {
  lesson: string;
};

const TeacherDataPage = () => {
  const { lesson } = useParams() as TParams;

  return (
    <section>
      <HeaderCreateData
        title={`guru ${lesson}`}
        labelBtn="Buat"
        titleOption="teacher lesson"
      />
      <CardTeacherData lessonParam={lesson} />
    </section>
  );
};

export default TeacherDataPage;
