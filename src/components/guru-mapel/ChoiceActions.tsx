import { HistoryHook } from "@/custom-hook/useHistory";

type TProps = {
  label: "presence" | "assessment";
};

const ChoiceActions = ({ label }: TProps) => {
  const { arrButtons, arrAssessmentButtons } = HistoryHook();
  const datas = label === "presence" ? arrButtons : arrAssessmentButtons;

  return (
    <section className="flex flex-col gap-5 851px:px-56 px-5 py-3">
      <section className="flex flex-col gap-4">
        <h2 className="text-[#4D4D4D] text-12px text-center">
          *Data riwayat berdasarkan tahun ajaran / periode.
        </h2>
        <h2 className="text-[#4D4D4D] text-14px text-center">Pilih semester</h2>
      </section>

      <section className="flex gap-4 justify-center">
        {datas.map(({ label, onClick }) => (
          <button
            className="bg-white px-4 py-2 rounded-lg none-highlight text-15px"
            key={label}
            onClick={onClick}
          >
            {label}
          </button>
        ))}
      </section>
    </section>
  );
};

export default ChoiceActions;
