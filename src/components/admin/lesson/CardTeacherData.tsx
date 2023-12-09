import EmptyDatas from "@/components/EmptyDatas";
import Loading from "@/components/Loading";
import TotalPeopleAPI from "@/components/TotalPeopleAPI";
import CreateTeacherLessonModal from "@/components/modals/CreateTeacherLessonModal";
import DeleteIcon from "@/components/templates/DeleteIcon";
import { useGetTeacherByLesson } from "@/hooks/use-admin";
import { postSetTeacherLesson } from "@/onsubmit/admin/postSetTeacherLesson";
import { TGetTeacherByLesson } from "@/types/componentTypes";

type TCardProps = {
  teachers?: TGetTeacherByLesson[];
};

const Card = ({ teachers }: TCardProps) => {
  const { deleted } = postSetTeacherLesson();

  return (
    <section className="grid grid-cols-auto-fit gap-4">
      {teachers?.map((teacher) => (
        <section
          className="bg-white shadow-cardShadow gap-2 p-5 rounded-2xl relative cursor-default none-highlight"
          key={teacher.id}
        >
          <section className="flex justify-between">
            <section className="flex flex-col justify-between gap-5">
              <section>
                <h3 className="text-[14px] text-[#4D4D4D]">
                  {teacher.user.teacher.nip}
                </h3>
                <h4 className="font-lexendMedium">{teacher.user.fullname}</h4>
              </section>
              <h4 className="text-12px text-[#4D4D4D]">
                Kelas {teacher.classNameId}
              </h4>
            </section>

            <DeleteIcon onCLick={() => deleted(teacher.id)} title="hapus" />
          </section>
        </section>
      ))}
    </section>
  );
};

type TProps = {
  lessonParam: string;
};

const CardTeacherData = ({ lessonParam }: TProps) => {
  const { data, isLoading } = useGetTeacherByLesson(lessonParam);
  if (isLoading) return <Loading />;
  const teacherLesson = data?.data;
  const totalUsers: number = data?.data?.length ?? 0;

  return (
    <section className="px-5 851px:px-56 flex flex-col gap-4">
      <TotalPeopleAPI labelAPI={totalUsers} />
      {totalUsers < 1 ? (
        <EmptyDatas label="pengajar" />
      ) : (
        <Card teachers={teacherLesson} />
      )}
      <CreateTeacherLessonModal lessonParam={lessonParam} />
    </section>
  );
};

export default CardTeacherData;
