import { ReactNode, useEffect } from "react";
import selectAccountHighlight from "@/utils/select-account-highlight";
import useUserStore from "@/store/userStore";

type NodeProps = {
  children?: ReactNode;
};

const SelectAccount = ({ children }: NodeProps) => {
  const { employeeId, setAccountType } = useUserStore();

  const {
    adminWrapper,
    wkWrapper,
    gmWrapper,
    handleAdminWrapper,
    handleGmWrapper,
    handleWkWrapper,
    setAdminWrapper,
    setWkWrapper,
    setGmWrapper,
  } = selectAccountHighlight();

  useEffect(() => {
    if (employeeId.role === "ADMIN") {
      setAdminWrapper(true);
      setAccountType("admin");
    } else if (employeeId.role === "WALI_KELAS") {
      setWkWrapper(true);
      setAccountType("wali-kelas");
    } else if (employeeId.role === "GURU_MAPEL") {
      setGmWrapper(true);
      setAccountType("guru-mapel");
    }
  }, [employeeId.role]);

  return (
    <section className="flex flex-col gap-4 my-4">
      <h3 className="capitalize">pilih jenis akun</h3>
      <section className="flex flex-col gap-4">
        <section
          className={`${
            adminWrapper ? "bg-secondary text-primary" : null
          } bg-primary px-4 py-3 rounded-md shadow-sm text-center capitalize text-dark cursor-pointer select-account text-[14px]`}
          onClick={handleAdminWrapper}
        >
          admin
        </section>

        <section
          className={`${
            wkWrapper ? "bg-secondary text-primary" : null
          } bg-primary px-4 py-3 rounded-md shadow-sm text-center capitalize text-dark cursor-pointer select-account text-[14px]`}
          onClick={handleWkWrapper}
        >
          wali kelas
        </section>

        {!wkWrapper ? null : children}

        <section
          className={`${
            gmWrapper ? "bg-secondary text-primary" : null
          } bg-primary px-4 py-3 rounded-md shadow-sm text-center capitalize text-dark cursor-pointer select-account text-[14px]`}
          onClick={handleGmWrapper}
        >
          guru mapel
        </section>
      </section>
    </section>
  );
};

export default SelectAccount;
