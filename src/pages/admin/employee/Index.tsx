import EmployeeCard from "@/components/admin/EmployeeCard";
import EmptyDatas from "@/components/EmptyDatas";
import { HeaderCreateData } from "@/components/headers/HeaderCreateData";
import { ShowTeacherInfo } from "@/components/modals/IndexModal";
import { useGetEmployees } from "@/hooks/use-admin";
import { filterEmployee } from "@/utils/filter-employee";
import Loading from "@/components/Loading";
import CreateEmployeeModal from "@/components/modals/CreateEmployeeModal";
import UpdateEmployeeModal from "@/components/modals/UpdateEmployeeModal";

const EmployeeAdmin = () => {
  const { admin, waliKelas, guruMapel } = {
    admin: "ADMIN",
    waliKelas: "WALI_KELAS",
    guruMapel: "GURU_MAPEL",
  };

  const { data, isLoading } = useGetEmployees();
  if (isLoading) return <Loading />;

  const employees = data?.data;
  const filteredAdmin = filterEmployee(admin, employees);
  const filteredWaliKelas = filterEmployee(waliKelas, employees);
  const filteredGuruMapel = filterEmployee(guruMapel, employees);

  return (
    <section>
      <HeaderCreateData title="data pegawai" labelBtn="Buat" />

      <section className="flex flex-col gap-8 py-2 mb-4">
        {filteredAdmin?.filterEmployee?.length! < 1 ? (
          <EmptyDatas label="Admin" />
        ) : (
          <EmployeeCard props={filteredAdmin.filterEmployee} label="admin" />
        )}

        {filteredWaliKelas?.filterEmployee?.length! < 1 ? (
          <EmptyDatas label="Wali Kelas" />
        ) : (
          <EmployeeCard
            props={filteredWaliKelas.sortByClass}
            label="wali kelas"
          />
        )}

        {filteredGuruMapel?.filterEmployee?.length! < 1 ? (
          <EmptyDatas label="Guru Mapel" />
        ) : (
          <EmployeeCard
            props={filteredGuruMapel.filterEmployee}
            label="guru mata pelajaran"
          />
        )}
      </section>

      <CreateEmployeeModal />
      <UpdateEmployeeModal />
      <ShowTeacherInfo />
    </section>
  );
};

export default EmployeeAdmin;
