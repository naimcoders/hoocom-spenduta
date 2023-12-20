import GeneralData from "@/components/admin/GeneralData";
import UserRoleCard, { TCardDataUser } from "@/components/admin/UserRoleCard";
import HeaderRole from "@/components/headers/HeaderRole";

const HomeAdmin = () => {
  const cardUserAdmin: TCardDataUser[] = [
    { id: 1, title: "pegawai", link: "/admin/data-pegawai" },
    { id: 2, title: "kelas", link: "/admin/data-kelas" },
    { id: 3, title: "mata pelajaran", link: "/admin/mata-pelajaran" },
  ];

  return (
    <main>
      <HeaderRole />
      <GeneralData />
      <UserRoleCard props={cardUserAdmin} />
    </main>
  );
};

export default HomeAdmin;
