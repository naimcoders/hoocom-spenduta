import { createPortal } from "react-dom";
import { modalId } from "@/utils/modal-id";
import TransitionModal from "../templates/TransitionModal";
import { useTeacherLessonData } from "@/custom-hook/useTeacherLessonData";
import OptionClassnames from "../options/OptionClassnames";
import Loading from "../Loading";
import OptionShowNames from "../options/OptionShowNames";
import SecondaryButton from "../buttons/SecondaryButton";
import { postSetTeacherLesson } from "@/onsubmit/admin/postSetTeacherLesson";
import { useGetClassname, useGetTeacherLessons } from "@/hooks/use-admin";

type TProps = {
  lessonParam?: string;
};

const ClassSection = () => {
  const { data, isLoading } = useGetClassname();
  if (isLoading || !data?.data) return <Loading />;

  return (
    <>
      <section className="flex flex-col gap-2">
        <h2 className="text-15px capitalize">kelas</h2>
        <OptionClassnames classes={data.data} />
      </section>
    </>
  );
};

const TeacherSection = () => {
  const { data, isLoading } = useGetTeacherLessons();
  if (isLoading) return <Loading />;

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-15px capitalize">guru mata pelajaran</h2>
      <OptionShowNames arrDatas={data?.data} label="guru mapel" />
    </section>
  );
};

const CreateTeacherLessonModal = ({ lessonParam }: TProps) => {
  const { isCreateTeacherLesson, modalAction } = useTeacherLessonData();
  const { teacherPosted, posted } = postSetTeacherLesson(lessonParam);
  if (teacherPosted.isLoading) return <Loading />;

  return (
    <>
      {!modalId
        ? null
        : createPortal(
            <TransitionModal
              isOpenModal={isCreateTeacherLesson}
              isCloseModal={modalAction}
              labelBtnTransparent="batal"
              textColor="text-secondary"
              title={`buat data guru ${lessonParam}`}
            >
              <form className="flex flex-col gap-4" onSubmit={posted}>
                <TeacherSection />
                <ClassSection />
                <SecondaryButton label="simpan data" />
              </form>
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default CreateTeacherLessonModal;
