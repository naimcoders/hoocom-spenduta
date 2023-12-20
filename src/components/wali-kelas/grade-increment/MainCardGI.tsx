import CardActions from "./CardActionsGI";
import Loading from "@/components/Loading";
import { useGetStudentByClass } from "@/hooks/use-wali-kelas";
import GradeIncrementModal from "@/components/modals/GradeIncrementModal";
import { useAuth } from "@/store/userStore";

const MainCardGI = () => {
  const user = useAuth((v) => v.user);
  const { data, isLoading } = useGetStudentByClass(
    user?.teacher?.className ?? ""
  );

  if (isLoading || !data?.data) return <Loading />;
  const students = data.data;

  return (
    <>
      <section className="grid grid-cols-auto-fit gap-4">
        {students.map((student) => (
          <section
            className="bg-white p-5 rounded-2xl flex flex-col gap-6"
            key={student.id}
          >
            <section className="flex flex-col items-center">
              <h2 className="text-14px text-[#4D4D4D]">
                {student.student.nis}
              </h2>
              <h3 className="font-lexendMedium">{student.fullname}</h3>
            </section>
            <span className="text-12px text-[#4D4D4D] text-center">
              {student.period}
            </span>

            <CardActions id={student.id} parentId={student.student.parentId} />
          </section>
        ))}
      </section>
      <GradeIncrementModal />
    </>
  );
};

export default MainCardGI;
