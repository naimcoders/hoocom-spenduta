import CreateParentAndStudentModal from "@/components/modals/CreateParentAndStudentModal";
import FindPhoneNumberModal from "@/components/modals/FindPhoneNumberModal";
import MainCardParent from "@/components/wali-kelas/parent/MainCardParent";
import CreateStudentModal from "@/components/modals/CreateStudentModal";
import { HeaderCreateData } from "@/components/headers/HeaderCreateData";
import { NavLink } from "react-router-dom";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/store/userStore";

const GradeClass = () => {
  return (
    <section className="px-5 mb-10 851px:px-56">
      <NavLink
        to="/wali-kelas/kenaikan-kelas"
        className="text-blue-500 bg-blue-100 py-2 pl-2 pr-4 text-[14px] rounded-lg inline-flex items-center gap-1 none-highlight"
        title="Mengatur kenaikan kelas murid"
      >
        <ChevronUpDownIcon className="w-6 h-6" />
        Kenaikan Kelas
      </NavLink>
    </section>
  );
};

const ParentPage = () => {
  const classname = useAuth((v) => v.user?.teacher?.className);

  return (
    <main>
      <HeaderCreateData labelBtn="Buat" title="murid & ortu" />
      <GradeClass />
      <MainCardParent classname={classname ?? ""} />

      <FindPhoneNumberModal />
      <CreateParentAndStudentModal />
      <CreateStudentModal />
    </main>
  );
};

export default ParentPage;
