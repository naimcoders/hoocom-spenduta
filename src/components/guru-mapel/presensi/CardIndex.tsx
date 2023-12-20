import Loading from "@/components/Loading";
import EmptyDatas from "@/components/EmptyDatas";
import { TPresences, useGeneralStore } from "@/store/generalStore";
import {
  FieldValues,
  UseFormRegister,
  UseFormUnregister,
} from "react-hook-form";
import CreateModalPresences from "@/components/modals/CreateModalPresences";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { useGetStudentByClass } from "@/hooks/use-wali-kelas";
import { TBaseParentAndStudent } from "@/types/commonTypes";
import { useGetPresenceDate } from "@/hooks/use-admin";
import { usePresences } from "@/custom-hook/usePresences";

type TRegister = UseFormRegister<FieldValues>;
type TUnRegister = UseFormUnregister<FieldValues>;
type TStatus = "Izin" | "Hadir" | "Absen";

type TPresenceStatus = {
  message: string;
};

const PresenceStatusComponent = ({ message }: TPresenceStatus) => {
  return (
    <section className="flex justify-center">
      <h1 className="bg-white p-5 rounded-lg font-lexendMedium text-15px text-center w-max">
        {message}
      </h1>
    </section>
  );
};

type TClassname = {
  classname: string;
};

const Information = ({ classname }: TClassname) => {
  return (
    <p className="text-12px text-[#4D4D4D]">
      *Jika tidak terdapat data siswa, silakan menghubungi wali kelas{" "}
      {classname}
    </p>
  );
};

const NotDataComponent = ({ classname }: TClassname) => {
  return (
    <section className="px-5 flex flex-col gap-4 851px:px-56">
      <EmptyDatas />
      <Information classname={classname} />
    </section>
  );
};

const filterPresences = (
  presences: TPresences[],
  callback: (data: TPresences) => void
) => {
  return presences.filter(callback);
};

const filterStudentId = (presences: TPresences[], studentId: string) => {
  const filterId = filterPresences(presences, (data) => {
    return data.studentId === studentId;
  });

  const mapId = filterId.map((presence) => {
    return presence.studentId;
  });

  return mapId;
};

const isIncludeStudentId = (
  presences: TPresences[],
  studentId: string
): boolean => {
  const arrStudentId = filterStudentId(presences, studentId);
  return arrStudentId.includes(studentId);
};

const filterByStatusAndId = (
  presences: TPresences[],
  studentId: string,
  status: TStatus
) => {
  const filtered = filterPresences(presences, (data) => {
    return data.studentId === studentId && data.status === status;
  });

  const mapId = filtered.map((presence) => {
    return presence.studentId;
  });

  return mapId.includes(studentId);
};

const filterStudentIdClassname = (
  presences: TPresences[],
  studentId: string
): string | undefined => {
  const filterId = filterPresences(presences, (data) => {
    return data.studentId === studentId;
  });

  const [map] = filterId.map((presence) => {
    return presence.status;
  });

  return map;
};

const removeDuplicateByStudentId = (
  presences: TPresences[],
  studentId: string
): TPresences[] => {
  return filterPresences(presences, (data) => {
    return data.studentId !== studentId;
  });
};

const presenceValues = (
  student: TBaseParentAndStudent,
  lessonId: string,
  status: TStatus
): TPresences => {
  return {
    studentId: student.id,
    classnameId: student.student.classNameId,
    lessonId,
    status,
  } satisfies TPresences;
};

const handleSetPresences = (
  presences: TPresences[],
  setPresences: (data: TPresences[]) => void,
  studentId: string,
  values: TPresences
): void => {
  const newArr = removeDuplicateByStudentId(presences, studentId);

  if (!isIncludeStudentId(presences, studentId)) {
    setPresences([...presences, values]);
    return;
  } else {
    setPresences([...newArr, values]);
    return;
  }
};

const HandleActionHook = (
  presences: TPresences[],
  lesson: string,
  setPresences: (data: TPresences[]) => void
) => {
  const handlePermission = (student: TBaseParentAndStudent) => {
    const values = presenceValues(student, lesson, "Izin");
    handleSetPresences(presences, setPresences, student.id, values);
  };

  const handleAttend = (
    student: TBaseParentAndStudent,
    unregister: TUnRegister
  ) => {
    const values = presenceValues(student, lesson, "Hadir");
    unregister(student.id);
    handleSetPresences(presences, setPresences, student.id, values);
  };

  const handleAbsent = (
    student: TBaseParentAndStudent,
    unregister: TUnRegister
  ) => {
    const values = presenceValues(student, lesson, "Absen");
    unregister(student.id);
    handleSetPresences(presences, setPresences, student.id, values);
  };

  const addBgCard = (studentId: string): string => {
    const filtered = filterStudentIdClassname(presences, studentId);
    const bg: string =
      filtered === "Izin"
        ? "bg-orange-300"
        : filtered === "Hadir"
        ? "bg-green-300"
        : filtered === "Absen"
        ? "bg-red-300"
        : "bg-white";

    return bg;
  };

  return { addBgCard, handlePermission, handleAbsent, handleAttend };
};

type TButtons = {
  student: TBaseParentAndStudent;
  handlePermission: (student: TBaseParentAndStudent) => void;
  handleAttend: (
    student: TBaseParentAndStudent,
    unregister: TUnRegister
  ) => void;
  handleAbsent: (
    student: TBaseParentAndStudent,
    unregister: TUnRegister
  ) => void;
  unregister: TUnRegister;
};

const addBgButton = (label: TStatus): string => {
  const str =
    label === "Izin"
      ? "bg-orange-100 text-orange-500"
      : label === "Hadir"
      ? "bg-green-100 text-green-500"
      : "bg-red-100 text-red-500";

  return str;
};

type TSetButton = {
  label: TStatus;
  onClick: () => void;
};

const Buttons = ({
  student,
  handlePermission,
  handleAbsent,
  handleAttend,
  unregister,
}: TButtons) => {
  const arrButtons = [
    { label: "Izin", onClick: () => handlePermission(student) },
    { label: "Hadir", onClick: () => handleAttend(student, unregister) },
    { label: "Absen", onClick: () => handleAbsent(student, unregister) },
  ] satisfies TSetButton[];

  return (
    <section className="flex gap-2">
      {arrButtons.map(({ label, onClick }) => (
        <button
          className={`${addBgButton(
            label
          )} capitalize text-[14px] px-4 py-1 rounded-lg none-highlight`}
          onClick={onClick}
          key={label}
          type="button"
        >
          {label}
        </button>
      ))}
    </section>
  );
};

type TCard = {
  students: TBaseParentAndStudent[];
  lesson: string;
  register: TRegister;
  unregister: TUnRegister;
};

const Card = ({ students, lesson, register, unregister }: TCard) => {
  const { presences, setPresences } = useGeneralStore();
  const { addBgCard, handlePermission, handleAttend, handleAbsent } =
    HandleActionHook(presences, lesson, setPresences);

  return (
    <section className="grid grid-cols-auto-fit gap-5 mb-6">
      {students.map((student) => (
        <section
          className={`${addBgCard(
            student.id
          )} flex flex-col gap-5 p-4 rounded-2xl justify-center items-center`}
          key={student.id}
        >
          <section className="flex flex-col gap-1 items-center">
            <h2 className="text-[#4D4D4D] text-[14px]">
              {student.student.nis}
            </h2>
            <h2 className="text-15px">{student.fullname}</h2>
          </section>

          <Buttons
            student={student}
            handlePermission={handlePermission}
            handleAttend={handleAttend}
            handleAbsent={handleAbsent}
            unregister={unregister}
          />

          {!filterByStatusAndId(presences, student.id, "Izin") ? null : (
            <input
              type="text"
              placeholder="Masukkan alasan izin..."
              className="bg-white border-[1px] border-gray-300 rounded-lg px-3 py-2 placeholder:text-gray-highlight focus:outline-1 w-full focus:outline-secondary placeholder:text-[14px] text-15px"
              {...register(student.id, {
                required: true,
              })}
            />
          )}
        </section>
      ))}
    </section>
  );
};

type TProps = TClassname & {
  lesson: string;
};

const CardIndexPresensi = ({ classname, lesson }: TProps) => {
  const presence = useGetPresenceDate(classname, lesson);
  const student = useGetStudentByClass(classname);

  const presenceDate = presence.data;
  const studentData = student.data?.data ?? [];
  const studentLength: number = studentData.length;

  const { setBeginPresences, register, unregister } = usePresences(
    classname,
    lesson,
    studentLength
  );

  return (
    <>
      {student.isLoading || presence.isLoading ? (
        <Loading />
      ) : presenceDate?.data ? (
        <PresenceStatusComponent message={presenceDate.message} />
      ) : studentData.length < 1 ? (
        <NotDataComponent classname={classname} />
      ) : (
        <section className="flex flex-col 851px:px-56 px-5">
          <Card
            students={studentData}
            lesson={lesson}
            register={register}
            unregister={unregister}
          />
          <SecondaryButton
            label={`simpan presensi ${classname}`}
            onClick={setBeginPresences}
          />
        </section>
      )}

      <CreateModalPresences
        classname={classname}
        lesson={lesson}
        totalStudents={studentLength}
      />
    </>
  );
};

export default CardIndexPresensi;
