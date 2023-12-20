import { useAuth } from "@/store/userStore";
import UserRoleCard, { TCardDataUser } from "@/components/admin/UserRoleCard";
import HeaderRole from "@/components/headers/HeaderRole";
import PeriodInfromation from "@/components/wali-kelas/PeriodInfromation";

const HomeWaliKelas = () => {
  const user = useAuth((v) => v.user);
  const cardUserWaliKelas: TCardDataUser[] = [
    {
      id: 1,
      title: "murid & orang tua",
      link: "/wali-kelas/murid-dan-orang-tua",
    },
    {
      id: 2,
      title: "kinerja murid",
      link: `/wali-kelas/kinerja-murid/${user?.teacher?.className}`,
    },
  ];

  return (
    <main className="flex flex-col gap-8">
      <HeaderRole />
      <PeriodInfromation label="wali-kelas" />
      <UserRoleCard props={cardUserWaliKelas} />
    </main>
  );
};

export default HomeWaliKelas;
