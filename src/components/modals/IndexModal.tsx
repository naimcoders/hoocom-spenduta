import { useActiveModal } from "@/custom-hook/useActiveModal";
import GeneralInfoModal from "./GeneralInfoModal";
import { useGeneralStore } from "@/store/generalStore";
import { TBaseTeacher } from "@/types/commonTypes";
import { useGetUserById } from "@/hooks/use-admin";

const useHookLocal = () => {
  const teacherId = useGeneralStore((v) => v.dataId);
  const { data, isLoading } = useGetUserById(teacherId);

  const setRole = (user?: TBaseTeacher) => {
    return user?.role === "ADMIN"
      ? `Admin - ${user.admin.status}`
      : user?.role === "GURU_MAPEL"
      ? "Guru Mapel"
      : `Wali Kelas - ${user?.teacher.className}`;
  };

  const setNIP = (user?: TBaseTeacher) => {
    return user?.role === "ADMIN" ? user.admin.nip : user?.teacher.nip;
  };

  const user = data?.data;
  const nip = setNIP(user);
  const role = setRole(user);

  return { user, isLoading, nip, role };
};

export const ShowTeacherInfo = () => {
  const { isSecondModal, actionSecondModal } = useActiveModal();
  const { user, isLoading, nip, role } = useHookLocal();
  if (isLoading) return null;

  return (
    <>
      <GeneralInfoModal
        title="Informasi"
        textColor="text-secondary"
        labelBtnTransparent="kembali"
        isOpenModal={isSecondModal}
        isCloseModal={actionSecondModal}
      >
        <section className="flex gap-4 text-15px whitespace-nowrap overflow-auto p-2 card-scroll-horizontal my-4">
          <section className="flex flex-col gap-2">
            <h2 className="capitalize font-lexendMedium">NIP</h2>
            <h2 className="capitalize font-lexendMedium">nama lengkap</h2>
            <h2 className="capitalize font-lexendMedium">email</h2>
            <h2 className="capitalize font-lexendMedium">no. HP</h2>
            <h2 className="capitalize font-lexendMedium">status</h2>
          </section>
          <section className="flex flex-col gap-2">
            <h2>: {nip}</h2>
            <h2>: {user?.fullname}</h2>
            <h2>: {user?.email}</h2>
            <h2>: {user?.phone}</h2>
            <h2 className="capitalize">: {role} </h2>
          </section>
        </section>
      </GeneralInfoModal>
    </>
  );
};
