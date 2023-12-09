import Loading from "../Loading";
import EditIcon from "../templates/EditIcon";
import GeneralDataModal from "../modals/GeneralDataModal";
import { generalDatas } from "@/utils/general-data-props";
import { useGeneralStore } from "@/store/generalStore";
import { useModalStore } from "@/store/modalStore";
import { useGetGeneralData } from "@/hooks/use-admin";

const GeneralData = () => {
  const { setIsGeneralData, isGeneralData } = useModalStore();
  const setDataId = useGeneralStore((state) => state.setDataId);
  const { data, isLoading } = useGetGeneralData();

  const editGeneralData = (id: string) => {
    setDataId(id);
    setIsGeneralData(!isGeneralData);
  };

  if (isLoading) return <Loading />;
  const getData = data?.data!;

  return (
    <>
      <GeneralDataModal />
      <section className="px-5 py-6 flex flex-col gap-4 851px:px-56">
        <section className="flex justify-between items-center">
          <h2 className="capitalize font-lexendMedium text-18px">data umum</h2>
          <EditIcon
            title="Edit data umum"
            onClick={() => editGeneralData(getData.id)}
          />
        </section>

        <section className="card-scroll-horizontal bg-white p-5 flex gap-4 shadow-cardShadow rounded-2xl whitespace-nowrap overflow-auto text-15px">
          <div className="flex flex-col">
            {generalDatas.map((general) => (
              <h3 className="capitalize text-[#757575]" key={general.id}>
                {general.inIndonesia}
              </h3>
            ))}
          </div>
          <div className="flex flex-col">
            <h3>: {getData.period}</h3>
            <h3>: {getData.semester}</h3>
            <h3>: {getData.kkm}</h3>
            <h3>: {getData.emailSchool}</h3>
            <h3>: {getData.fixedPassword}</h3>
          </div>
        </section>
      </section>
    </>
  );
};

export default GeneralData;
