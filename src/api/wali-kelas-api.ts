import { URI_BACKEND } from "./index-api";

const waliKelasAPI = `${URI_BACKEND}/api/wali-kelas`;

export const uriGetStudents = `${waliKelasAPI}/students`;
export const uriDeleteStudentAndParent = `${waliKelasAPI}/delete-student-parent`; // :studentId/:parentId (params)
export const uriGetParents = `${waliKelasAPI}/parents`;
export const uriFindPhoneNumber = `${waliKelasAPI}/search-phone-number`;
export const uriCreateParentAndStudent = `${waliKelasAPI}/create-parent-student`;
export const uriCreateStudent = `${waliKelasAPI}/create-student`;
export const uriStudentPerformance = `${waliKelasAPI}/student-performance`;
export const uriGradeIncrement = `${waliKelasAPI}/grade-increment`;
