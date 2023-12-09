import DeleteEmployee from "@/onsubmit/admin/deleteEmployee";
import EditIcon from "../templates/EditIcon";
import useUserStore from "@/store/userStore";
import DeleteIcon from "../templates/DeleteIcon";
import InformationIcon from "../templates/InformationIcon";
import { useActiveModal } from "@/custom-hook/useActiveModal";
import { TBaseUser } from "@/types/commonTypes";
import { useGeneralStore } from "@/store/generalStore";

type CardProps = {
  props?: TBaseUser[];
  label: string;
};

const EmployeeCard = ({ props, label }: CardProps) => {
  const { deleteCard } = DeleteEmployee();
  const { setEmployeeId } = useUserStore();
  const { actionSecondModal, actionThirthModal } = useActiveModal();
  const setId = useGeneralStore((v) => v.setDataId);

  const openModal = (id: string, role: string) => {
    setEmployeeId({ id, role });
    actionThirthModal();
  };

  const openInfo = (id: string) => {
    setId(id);
    actionSecondModal();
  };

  return (
    <section className="px-5 851px:px-56">
      <h2 className="capitalize font-lexendMedium mb-4">{label}</h2>

      <section className="grid grid-cols-auto-fit gap-4">
        {props?.map((prop) => (
          <section
            className="bg-white shadow-cardShadow gap-2 p-5 rounded-2xl relative cursor-default none-highlight"
            key={prop.id}
          >
            <section className="flex justify-between">
              <section className="flex flex-col justify-between gap-5">
                <section>
                  <h3 className="text-[14px] text-[#4D4D4D]">
                    {prop.role === "ADMIN"
                      ? prop.admin?.nip
                      : prop.role === "WALI_KELAS"
                      ? prop.teacher?.nip
                      : prop.teacher?.nip}
                  </h3>
                  <h4 className="font-lexendMedium">{prop.fullname}</h4>
                </section>
                <h4
                  className={`${
                    prop.role === "GURU_MAPEL"
                      ? "hidden"
                      : "text-12px text-[#4D4D4D] capitalize"
                  }`}
                >
                  {prop.role === "ADMIN"
                    ? prop.admin?.status
                    : prop.role === "WALI_KELAS"
                    ? `Kelas ${prop.teacher?.className}`
                    : null}
                </h4>
              </section>

              <section className="flex flex-col justify-between items-end gap-5">
                <InformationIcon
                  title="Lihat data"
                  onCLick={() => openInfo(prop.id)}
                />

                <section className="flex gap-4 items-center">
                  <EditIcon
                    title="Edit data"
                    onClick={() => openModal(prop.id, prop.role)}
                  />

                  {prop?.admin?.status === "utama" ? null : (
                    <DeleteIcon
                      title="Hapus data"
                      onCLick={() => deleteCard(prop.role, prop.id)}
                    />
                  )}
                </section>
              </section>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default EmployeeCard;
