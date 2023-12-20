import EmptyDatas from "@/components/EmptyDatas";
import ChoiceActions from "@/components/guru-mapel/ChoiceActions";
import HeaderHistory from "@/components/headers/HeaderHistory";
import { useParseDate } from "@/custom-hook/useParseDate";
import { useGeneralStore } from "@/store/generalStore";
import { TLabelAssessment, TValueAssessment } from "@/types/componentTypes";

type TChildCardComponent = {
  title: TLabelAssessment;
  datas: TValueAssessment[];
};

const filterByType = (
  label: TLabelAssessment,
  assessments: TValueAssessment[]
) => {
  return assessments.filter((assessment) => {
    return assessment.type === label;
  });
};

const ChildCardComponent = ({ title, datas }: TChildCardComponent) => {
  const filtered = filterByType(title, datas);
  return (
    <>
      <section className="px-5 py-3 851px:px-56 flex flex-col gap-3">
        <h1 className="w-max font-lexendSemiBold px-4 py-2 rounded-lg bg-white">
          {title}
        </h1>

        <section className="flex gap-4  whitespace-nowrap overflow-auto rounded-lg card-scroll-horizontal 600px:grid 600px:grid-cols-auto-fit">
          {filtered.length < 1 ? (
            <EmptyDatas label={title} />
          ) : (
            filtered.map(({ id, user, createdAt, score, description }) => (
              <section
                className="bg-white p-4 rounded-lg flex flex-col gap-6"
                key={id}
              >
                <section>
                  <aside className="flex items-center justify-between gap-16">
                    <h1 className="text-14px font-lexendMedium">
                      {user.student.nis}
                    </h1>

                    <aside className="font-lexendSemiBold text-2xl">
                      {score}
                    </aside>
                  </aside>
                  <h2 className="text-14px">{user.fullname}</h2>
                </section>

                <section className="flex flex-col gap-2">
                  <aside className="text-12px text-[#4D4D4D]">
                    {description}
                  </aside>
                  <aside className="text-12px font-lexendMedium text-[#4D4D4D]">
                    {useParseDate(createdAt).fixedDate}
                  </aside>
                </section>
              </section>
            ))
          )}
        </section>
      </section>
    </>
  );
};

const CardComponent = () => {
  const assessmentValues = useGeneralStore((b) => b.assessmentValues);
  return (
    <>
      {!assessmentValues ? (
        <div className="600px:mx-56">
          <EmptyDatas label="penilaian" />
        </div>
      ) : (
        <>
          <ChildCardComponent title="Tugas" datas={assessmentValues} />
          <ChildCardComponent title="Ulangan" datas={assessmentValues} />
          <ChildCardComponent title="UTS" datas={assessmentValues} />
          <ChildCardComponent title="UAS" datas={assessmentValues} />
        </>
      )}
    </>
  );
};

const AssessmentHistoryPage = () => {
  return (
    <main className="flex flex-col gap-4 mb-4">
      <HeaderHistory label="penilaian" />
      <ChoiceActions label="assessment" />
      <CardComponent />
    </main>
  );
};

export default AssessmentHistoryPage;
