import DeleteIcon from "../../templates/DeleteIcon";
import InformationIcon from "../../templates/InformationIcon";
import { useShowInfoUser } from "@/custom-hook/useShowInfoUser";
import { useGeneralStore } from "@/store/generalStore";
import { useDeleteStudentAndParent } from "@/hooks/use-wali-kelas";
import { useAuth } from "@/store/userStore";
import { TBaseParentAndStudent } from "@/types/commonTypes";

type TCardProps = {
  parentId: string;
  students: TBaseParentAndStudent;
};

const useInfo = () => {
  const { isShowInfoUser, setIsShowInfoUser } = useShowInfoUser();
  const { setStudents, setDataId } = useGeneralStore();

  const showInfo = (parentId: string, students: TBaseParentAndStudent) => {
    setDataId(parentId);
    setStudents(students);
    setIsShowInfoUser(!isShowInfoUser);
  };

  return { showInfo };
};

const useDelete = () => {
  const classname = useAuth((v) => v.user?.teacher?.className);
  const { mutateAsync } = useDeleteStudentAndParent(classname ?? "");

  const deleteStudent = async (studentId: string, parentId: string) => {
    try {
      const data = { studentId, parentId };
      await mutateAsync(data);
    } catch (err) {
      console.error(err);
    }
  };

  return { deleteStudent };
};

const CardActionParent = ({ students, parentId }: TCardProps) => {
  const { showInfo } = useInfo();
  const { deleteStudent } = useDelete();

  return (
    <section className="flex flex-col justify-between items-end gap-5">
      <InformationIcon
        title="Informasi"
        onCLick={() => showInfo(parentId, students)}
      />
      <DeleteIcon
        title="Delete"
        onCLick={() => deleteStudent(students.id, parentId)}
      />
    </section>
  );
};

export default CardActionParent;
