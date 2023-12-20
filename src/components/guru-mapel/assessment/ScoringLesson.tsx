import SecondaryButton from "@/components/buttons/SecondaryButton";
import TextfieldMultipleType from "@/components/textfields/TextfieldMultipleType";
import { SubmitAssessment } from "@/onsubmit/guru-mapel/assessment";

const Title = () => {
  return (
    <>
      <section>
        <h1 className="font-lexendMedium">Tentukan bobot penilaian</h1>
        <p className="text-[#4D4D4D] text-12px">
          Masukkan dalam bentuk desimal
        </p>
      </section>
      <hr />
    </>
  );
};

type TLabel = "tugas" | "ulangan" | "uts" | "uas";
type TScoringField = {
  label: TLabel;
};

const arrScoringField: TScoringField[] = [
  { label: "tugas" },
  { label: "ulangan" },
  { label: "uts" },
  { label: "uas" },
];

const transformedLabel = (label: TLabel): string => {
  return label === "uas" || label === "uts" ? "uppercase" : "capitalize";
};

type TProps = {
  bobotId: string;
};

const ScoringForm = ({ bobotId }: TProps) => {
  const { control, onSubmitBobot } = SubmitAssessment(bobotId);

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmitBobot}>
      <section className="grid grid-cols-auto-fit gap-4">
        {arrScoringField.map(({ label }) => (
          <section key={label} className="flex flex-col gap-2">
            <label
              className={`${transformedLabel(label)} text-15px`}
              htmlFor={label}
            >
              {label}
            </label>
            <TextfieldMultipleType
              id={label}
              name={label}
              placeholder="contoh 0.2"
              type="number"
              defaultValue=""
              rules={{ required: true }}
              control={control}
            />
          </section>
        ))}
      </section>

      <SecondaryButton label="simpan bobot" />
    </form>
  );
};

const ScoringLesson = ({ bobotId }: TProps) => {
  return (
    <section className="851px:mx-56 p-6 600px:rounded-2xl flex flex-col gap-4 bg-white">
      <Title />
      <ScoringForm bobotId={bobotId} />
    </section>
  );
};

export default ScoringLesson;
