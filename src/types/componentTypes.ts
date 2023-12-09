import { TTeacherUser } from "./commonTypes";

export type TSingleId = {
  id: string;
};
export type TSingleClassname = {
  classname: string;
};
export type TSingleLesson = {
  lesson: string;
};
export type TSingleClassName = {
  className: string;
};
export type TSinglePhone = {
  phone: string;
};

export type TUseClassList = {
  id: number;
  classname?: string;
  lesson?: string;
};

export type TAttendanceAndAssessmentBody = TSingleClassname &
  TSingleSemester &
  TSingleLesson;

export type TGetTeacherLesson = TSingleId & {
  teacherId: string;
  classNameId: string;
  lessonId: string;
  bobot: string;
  period: string;
  createdAt: string;
};

export type TPatchEmployee = TSinglePhone & {
  nip: string;
  fullname: string;
  email: string;
  password: string;
  role: string;
  className: string;
};

export type TCreateAssessment = {
  type: string;
  lessonId: string;
  studentId: string;
  score: number;
  description: string;
};

export type TBobot = {
  tugas: number;
  ulangan: number;
  uts: number;
  uas: number;
};

export type TBaseBobotById = TSingleId & {
  bobot: TBobot;
};

type TBaseCurrentScore = {
  score: number;
  description: string;
};

export type TBasePatchCurrentScore = {
  idCurrentScore: string;
  currentScore: TBaseCurrentScore[];
};

export type TSinglePassword = {
  password: string;
};

export type TBodyPassword = TSinglePassword & TSingleUserId;
export type TBodyChangePassword = TBodyPassword & {
  confirmPassword: string;
};

export type TBodyProfile = {
  urlImage: string | null;
  imageName: string | null;
};

export type TValueEditProfile = TBodyProfile & TSingleId;

export type TValueAttendaces = {
  id: string;
  studentId: string;
  classnameId: string;
  lessonId: string;
  status: string;
  description: string | null;
  semester: string;
  period: string;
  createdAt: string;
  updatedAt: string;
  user: {
    fullname: string;
    student: {
      nis: string;
    };
  };
};

export type TLabelPresence = "Hadir" | "Izin" | "Absen";
export type TLabelAssessment = "Tugas" | "Ulangan" | "UAS" | "UTS";

export type TGeneralData = TSingleId & {
  period: string;
  semester: string;
  kkm: number;
  emailSchool: string;
  passwordEmail: string;
  fixedPassword: string;
};

export type TSingleSemester = {
  semester: string;
};

export type TValuePrecences = {
  id: string;
  studentId: string;
  classnameId: string;
  lessonId: string;
  status: string;
  description?: string;
  semester: string;
  period: string;
};

export type TGetAttendances = {
  id: string;
  studentId: string;
  classnameId: string;
  lessonId: string;
  status: string;
  description: string | null;
  semester: string;
  period: string;
  createdAt: string;
  updatedAt: string;
  user: {
    fullname: string;
    student: {
      nis: string;
    };
  };
};

export type TPostTeacherLesson = TSingleClassname &
  TSingleLesson & {
    teacher: string;
  };

export type TGetTeacherByLesson = TSingleId & {
  classNameId: string;
  user: TSingleId & {
    fullname: string;
    teacher: TTeacherUser;
  };
};

export type TValueAssessment = TSingleId & {
  studentId: string;
  type: string;
  semester: string;
  lessonId: string;
  createdAt: string;
  score: number;
  description: string;
  user: {
    fullname: string;
    student: {
      nis: string;
      classNameId: string;
    };
  };
};

export type TValueAttendancesAndAssessments = {
  attendances: TGetAttendances[];
  assessments: TValueAssessment[];
  bobot: TBaseBobotById;
};

export type TSingleUserId = {
  userId: string;
};

export type TUserIdAndRole = TSingleUserId & {
  role: string;
};

export type TDeleteStudentParent = {
  studentId: string;
  parentId: string;
};

export type TPostParentAndStudent = {
  parentFullname: string;
  parentPhone: string;
  email: string;
  nis: string;
  classname?: string;
  studentFullname: string;
  studentPhone: string;
};

export type TPostStudent = {
  nis: string;
  fullname: string;
  phone: string;
  classname?: string;
};

export type TBaseUserIdAndClassname = TSingleUserId & TSingleClassname;

type TPageName = "presensi" | "penilaian";
export const setUriHistory = (
  pageName: TPageName,
  classname: string,
  lesson: string
): string => {
  return `/guru-mapel/${pageName}/${classname}/${lesson}/riwayat`;
};
