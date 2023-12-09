import { createPortal } from "react-dom";
import TransitionModal from "../templates/TransitionModal";
import { modalId } from "@/utils/modal-id";
import { useShowInfoUser } from "@/custom-hook/useShowInfoUser";
import { useGeneralStore } from "@/store/generalStore";
import { useParseDate } from "@/custom-hook/useParseDate";
import { useGetParentById } from "@/hooks/use-wali-kelas";

const ShowInfoStudentAndParent = () => {
  const { isShowInfoUser, closeModal } = useShowInfoUser();
  const { students, dataId } = useGeneralStore();
  const { data, isLoading } = useGetParentById(dataId);
  if (isLoading) return null;

  const parent = data?.data;
  const studentDate = useParseDate(students?.createdAt);
  const parentDate = useParseDate(parent?.createdAt);

  return (
    <>
      {!modalId
        ? null
        : createPortal(
            <TransitionModal
              isOpenModal={isShowInfoUser}
              isCloseModal={closeModal}
              labelBtnTransparent="kembali"
              textColor="text-secondary"
              title={`data - ${students?.student.nis}`}
            >
              <section className="flex flex-col gap-6 my-4">
                <section className="flex flex-col gap-4">
                  <h2 className="text-secondary font-lexendMedium">Siswa</h2>
                  <ul className="flex flex-col gap-1">
                    <li className="font-lexendMedium">{students?.fullname}</li>
                    <li className="text-[14px]">{students?.phone}</li>
                  </ul>
                  <section className="flex items-center justify-between gap-2">
                    <h2 className="text-12px text-secondary">
                      Dibuat : {studentDate.fixedDate}
                    </h2>
                    <h2 className="text-12px bg-red-400 text-white px-2 py-1 rounded-lg w-max capitalize">
                      {students?.student.status}
                    </h2>
                  </section>
                </section>

                <hr />

                <section className="flex flex-col gap-4">
                  <h2 className="text-secondary font-lexendMedium">
                    Orang Tua
                  </h2>
                  <ul className="flex flex-col gap-1">
                    <li className="font-lexendMedium">{parent?.fullname}</li>
                    <li className="text-[14px]">{parent?.phone}</li>
                    <li className="text-[14px]">{parent?.email}</li>
                  </ul>
                  <h2 className="text-12px text-secondary">
                    Dibuat : {parentDate.fixedDate}
                  </h2>
                </section>
              </section>
            </TransitionModal>,
            modalId
          )}
    </>
  );
};

export default ShowInfoStudentAndParent;
