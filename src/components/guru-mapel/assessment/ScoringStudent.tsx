import Loading from "@/components/Loading";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import OptionShowNames from "@/components/options/OptionShowNames";
import TextfieldMultipleType from "@/components/textfields/TextfieldMultipleType";
import { useGetStudentByClass } from "@/hooks/use-wali-kelas";
import { SubmitAssessment } from "@/onsubmit/guru-mapel/assessment";
import { useGeneralStore } from "@/store/generalStore";
import { TBaseParentAndStudent } from "@/types/commonTypes";
import { TLabelAssessment } from "@/types/componentTypes";
import { FormValues } from "@/utils/form-props";
import { memo } from "react";
import { Control } from "react-hook-form";

type TProps = {
  classname: string;
};

type TOption = {
  data: TBaseParentAndStudent[];
};

const OptionComponent = memo(({ data }: TOption) => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="capitalize text-15px">nama siswa</h2>
      <OptionShowNames arrDatas={data} label="siswa" />
    </section>
  );
});

type TFieldProps = {
  label: "description" | "score";
  placeholder: string;
  type: string;
};

// const transformLabel = (label: TLabelAssessment): string => {
//   return label === "uas" ? "UAS" : label === "uts" ? "UTS" : label;
// };

const setObjectField = (label: TLabelAssessment): TFieldProps[] => {
  return [
    {
      label: "description",
      placeholder: `Masukkan judul ${label}`,
      type: "text",
    },
    {
      label: "score",
      placeholder: `Masukkan nilai ${label}`,
      type: "number",
    },
  ];
};

type TScoringForm = {
  label: TLabelAssessment;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  control: Control<FormValues, any>;
};

const ScoringForm = ({ label, onSubmit, control }: TScoringForm) => {
  return (
    <form
      className="flex flex-col gap-4 bg-white p-4 rounded-2xl my-4"
      onSubmit={onSubmit}
    >
      <h2 className="text-15px font-lexendMedium capitalize">{label}</h2>
      <section className="flex flex-col gap-3">
        {setObjectField(label).map(({ label, placeholder, type }) => (
          <TextfieldMultipleType
            control={control}
            name={label}
            id={label}
            placeholder={placeholder}
            type={type}
            defaultValue=""
            rules={{ required: true }}
            key={label}
          />
        ))}
      </section>
      <SecondaryButton label={`simpan nilai ${label}`} />
    </form>
  );
};

type TButton = {
  label: TLabelAssessment;
};

const isTheSameType = (
  type: string | TLabelAssessment,
  label: TLabelAssessment,
  labelLoop: TLabelAssessment
): boolean => {
  return type === label && labelLoop === type;
};

const Cards = () => {
  const { onSubmitTugas, control, handleAssessment } = SubmitAssessment();
  const { typeAssessment } = useGeneralStore();

  const arrButtons: TButton[] = [
    { label: "Tugas" },
    { label: "Ulangan" },
    { label: "UTS" },
    { label: "UAS" },
  ];

  return (
    <section className="grid grid-cols-auto-fit gap-4">
      {arrButtons.map((btn) => (
        <section key={btn.label}>
          <button
            className="bg-white w-full p-4 text-15px rounded-lg none-highlight capitalize"
            onClick={() => handleAssessment(btn.label)}
            key={btn.label}
          >
            {btn.label}
          </button>

          {isTheSameType(typeAssessment, "Tugas", btn.label) ? (
            <ScoringForm
              control={control}
              label="Tugas"
              onSubmit={onSubmitTugas}
            />
          ) : isTheSameType(typeAssessment, "Ulangan", btn.label) ? (
            <ScoringForm
              control={control}
              label="Ulangan"
              onSubmit={onSubmitTugas}
            />
          ) : isTheSameType(typeAssessment, "UTS", btn.label) ? (
            <ScoringForm
              control={control}
              label="UTS"
              onSubmit={onSubmitTugas}
            />
          ) : isTheSameType(typeAssessment, "UAS", btn.label) ? (
            <ScoringForm
              control={control}
              label="UAS"
              onSubmit={onSubmitTugas}
            />
          ) : null}
        </section>
      ))}
    </section>
  );
};

const ScoringStudent = ({ classname }: TProps) => {
  const { data, isFetching } = useGetStudentByClass(classname);

  if (isFetching || !data?.data) return <Loading />;

  return (
    <>
      <main className="851px:px-56 px-5 flex flex-col gap-6 mb-6">
        <OptionComponent data={data.data} />
        <Cards />
      </main>
    </>
  );
};

export default ScoringStudent;
