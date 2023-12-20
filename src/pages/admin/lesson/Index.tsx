import { HeaderCreateData } from "@/components/headers/HeaderCreateData";
import { NavLink, useLocation } from "react-router-dom";
import { useGetLessons } from "@/hooks/use-admin";
import { useFormLesson } from "@/custom-hook/useFormLesson";
import EmptyClassInfo from "@/components/EmptyDatas";
import Loading from "@/components/Loading";
import CreateLessonModal from "@/components/modals/CreateLessonModal";
import DeleteIcon from "@/components/templates/DeleteIcon";

const LessonAdmin = () => {
  const { pathname } = useLocation();
  const { onDeleteLesson } = useFormLesson();
  const { data, isLoading } = useGetLessons();

  if (isLoading || !data?.data) return <Loading />;
  const lessons = data?.data;

  return (
    <section>
      <HeaderCreateData title="mata pelajaran" labelBtn="Buat" />
      <section className="px-5 py-2 851px:px-56 grid grid-cols-auto-fit-class-card gap-4">
        {lessons?.length < 1 ? (
          <EmptyClassInfo label="mata pelajaran" />
        ) : (
          lessons?.map((lesson) => (
            <section
              key={lesson.lesson}
              title="Lihat data kelas"
              className="bg-white flex justify-center items-center gap-2 px-10 py-6 rounded-lg relative cursor-pointer none-highlight"
            >
              <DeleteIcon
                title={`Hapus mapel ${lesson.lesson}`}
                onCLick={() => onDeleteLesson(lesson.lesson)}
                style="absolute top-2 right-2"
              />

              <section className="flex flex-col items-center gap-4">
                <h3 className="601px:text-15px text-center">{lesson.lesson}</h3>
                <NavLink
                  to={`${pathname}/pengajar/${lesson.lesson}`}
                  className="capitalize  text-12px text-secondary"
                >
                  data guru
                </NavLink>
              </section>
            </section>
          ))
        )}
      </section>
      <CreateLessonModal />
    </section>
  );
};

export default LessonAdmin;
