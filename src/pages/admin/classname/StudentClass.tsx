import DeleteIcon from "@/components/templates/DeleteIcon";
import MainCardParent from "@/components/wali-kelas/parent/MainCardParent";
import { useClassname } from "@/custom-hook/useClassname";
import { TSingleClassname } from "@/types/componentTypes";
import { useParams } from "react-router-dom";

const Header = ({ classname }: TSingleClassname) => {
  const { handleDeleteClass } = useClassname();
  return (
    <header className="bg-white p-5 font-lexendSemiBold 851px:px-56 flex items-center justify-between">
      <h1>Kelas {classname}</h1>
      <DeleteIcon
        title={`Hapus kelas ${classname}`}
        onCLick={() => handleDeleteClass(classname)}
      />
    </header>
  );
};

const StudentClass = () => {
  const { classname } = useParams() as TSingleClassname;

  return (
    <main className="flex flex-col gap-4">
      <Header classname={classname} />
      <MainCardParent classname={classname} />
    </main>
  );
};

export default StudentClass;
