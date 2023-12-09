import EmptyDatas from "@/components/EmptyDatas";
import ChoiceActions from "@/components/guru-mapel/ChoiceActions";
import HeaderHistory from "@/components/headers/HeaderHistory";
import { HistoryHook } from "@/custom-hook/useHistory";
import { useParseDate } from "@/custom-hook/useParseDate";
import { useGeneralStore } from "@/store/generalStore";
import { TGetAttendances, TLabelPresence } from "@/types/componentTypes";

type TChildCardComponent = {
  title: TLabelPresence;
  arrCards?: TGetAttendances[];
  bgColor: "bg-orange-300" | "bg-green-300" | "bg-red-300";
};

const ChildCardComponent = ({
  title,
  arrCards,
  bgColor,
}: TChildCardComponent) => {
  return (
    <section className="p-5 851px:px-56 flex flex-col gap-3">
      <h1
        className={`${bgColor} w-max font-lexendSemiBold px-4 py-2 rounded-lg`}
      >
        {title}
      </h1>

      <section className="flex gap-4 whitespace-nowrap overflow-auto card-scroll-horizontal rounded-lg 600px:grid 600px:grid-cols-auto-fit">
        {arrCards?.length! < 1 ? (
          <EmptyDatas label={title} bgColor={bgColor} />
        ) : (
          arrCards?.map((presence) => (
            <section
              className={`${bgColor} p-4 rounded-lg flex flex-col gap-4`}
              key={presence.id}
            >
              <section>
                <h1 className="text-14px font-lexendMedium">
                  {presence.user.student.nis}
                </h1>
                <h2 className="text-15px">{presence.user.fullname}</h2>
              </section>

              <h2 className="text-12px font-lexendMedium">
                {useParseDate(presence.createdAt).fixedDate}
              </h2>
            </section>
          ))
        )}
      </section>
    </section>
  );
};

const ParentCardComponent = () => {
  const { attendances } = useGeneralStore();
  const { attendPrecences, permissionPrecences, absentPrecences } =
    HistoryHook();

  return (
    <>
      {!attendances ? null : attendances?.length! < 1 ? (
        <div className="851px:mx-56">
          <EmptyDatas label="presensi" />
        </div>
      ) : (
        <>
          <ChildCardComponent
            title="Hadir"
            arrCards={attendPrecences}
            bgColor="bg-green-300"
          />
          <ChildCardComponent
            title="Izin"
            arrCards={permissionPrecences}
            bgColor="bg-orange-300"
          />
          <ChildCardComponent
            title="Absen"
            arrCards={absentPrecences}
            bgColor="bg-red-300"
          />
        </>
      )}
    </>
  );
};

const PresenceHistoryPage = () => {
  return (
    <main className="flex flex-col gap-4 mb-4">
      <HeaderHistory label="presensi" />
      <ChoiceActions label="presence" />
      <ParentCardComponent />
    </main>
  );
};

export default PresenceHistoryPage;
