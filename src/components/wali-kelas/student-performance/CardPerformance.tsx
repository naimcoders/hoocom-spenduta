import Loading from "@/components/Loading";
import { useStudentPerformance } from "@/custom-hook/useStudentPerformance";
import {
  TBaseBobotById,
  TGetAttendances,
  TSingleId,
  TValueAssessment,
} from "@/types/componentTypes";
import {
  assessmentAverage,
  mapPresenceByStatus,
} from "@/utils/assessment-filter";

type TIdentity = {
  nis: string;
  fullname: string;
};
const IdentityComponent = ({ nis, fullname }: TIdentity) => {
  return (
    <section>
      <h1 className="text-14px text-[#4D4D4D]">{nis}</h1>
      <h2 className="text-15px">{fullname}</h2>
    </section>
  );
};

type TProps = TSingleId & {
  attendances?: TGetAttendances[];
  assessments?: TValueAssessment[];
  bobot?: TBaseBobotById;
};

const PresenceComponent = ({ id, attendances }: TProps) => {
  if (attendances?.length! < 1) return null;

  const attends = mapPresenceByStatus(id, "Hadir", attendances)?.length;
  const permissions = mapPresenceByStatus(id, "Izin", attendances)?.length;
  const absents = mapPresenceByStatus(id, "Absen", attendances)?.length;

  return (
    <>
      <section className="flex flex-col gap-1">
        <h1 className="text-15px font-lexendMedium">Presensi</h1>
        <section className="text-14px flex gap-4 whitespace-nowrap overflow-auto card-scroll-horizontal py-2">
          <span>Hadir : {attends}</span> | <span>Izin : {permissions}</span> |{" "}
          <span>Absen : {absents}</span>
        </section>
      </section>
      <hr />
    </>
  );
};

const AssessmentComponent = ({ id, assessments, bobot }: TProps) => {
  if (assessments?.length! < 1 || !bobot?.bobot) return null;

  const tugas = assessmentAverage(id, "Tugas", bobot, assessments);
  const ulangan = assessmentAverage(id, "Ulangan", bobot, assessments);
  const uts = assessmentAverage(id, "UTS", bobot, assessments);
  const uas = assessmentAverage(id, "UAS", bobot, assessments);

  return (
    <section className="flex flex-col gap-1">
      <h1 className="text-15px font-lexendMedium">Nilai</h1>
      <section className="text-14px flex gap-4 whitespace-nowrap overflow-auto py-2 card-scroll-horizontal">
        <span>Tugas : {tugas}</span> | <span>Ulangan : {ulangan}</span> |{" "}
        <span>UTS : {uts}</span> | <span>UAS : {uas}</span>
      </section>
    </section>
  );
};

const CardPerformance = () => {
  const {
    getStudents,
    dataPerformance,
    students,
    assessments,
    attendances,
    bobots,
  } = useStudentPerformance();

  if (getStudents.isLoading || dataPerformance.isLoading) return <Loading />;

  return (
    <section className="851px:px-56 px-5 py-3 mb-6 grid grid-cols-auto-fit gap-5">
      {students?.map(({ id, student, fullname }) => (
        <section
          className="bg-white p-4 rounded-lg flex flex-col gap-5"
          key={id}
        >
          <IdentityComponent nis={student.nis} fullname={fullname} />
          <PresenceComponent id={id} attendances={attendances} />
          <AssessmentComponent
            id={id}
            assessments={assessments}
            bobot={bobots}
          />
        </section>
      ))}
    </section>
  );
};

export default CardPerformance;
