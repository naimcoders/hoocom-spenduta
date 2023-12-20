// TEXTFIELD
export type FormValues = {
  fullname: string;
  password: string;
  confirmPassword: string;
  period: string;
  semester: string;
  kkm: number;
  emailSchool: string;
  passwordEmail: string;
  classname: string;
  lesson: string;
  nip: string;
  phone: string;
  email: string;
  message: string;
  parentFullname: string;
  studentFullname: string;
  parentPhone: string;
  studentPhone: string;
  nis: string;
  tugas: number;
  ulangan: number;
  uas: number;
  uts: number;
  description: string;
  score: number;
};

// FORM TO CREATE PARENT AND STUDENT
type TId =
  | "parentFullname"
  | "studentFullname"
  | "parentPhone"
  | "studentPhone"
  | "email"
  | "nis"
  | "fullname"
  | "phone";

type TFormParentAndStudent = {
  id: TId;
  label: string;
  placeholder: string;
  type: "text" | "number" | "email";
};

export const FormParentAndStudentDatas: TFormParentAndStudent[] = [
  {
    id: "parentFullname",
    label: "nama lengkap orang tua",
    placeholder: "masukkan nama lengkap orang tua...",
    type: "text",
  },
  {
    id: "parentPhone",
    label: "no. HP orang tua",
    placeholder: "masukkan no. HP orang tua...",
    type: "number",
  },
  {
    id: "email",
    label: "email orang tua",
    placeholder: "masukkan email orang tua...",
    type: "email",
  },
  {
    id: "nis",
    label: "nomor induk siswa",
    placeholder: "masukkan NIS...",
    type: "text",
  },
  {
    id: "studentFullname",
    label: "nama lengkap siswa",
    placeholder: "masukkan nama lengkap anak...",
    type: "text",
  },
  {
    id: "studentPhone",
    label: "no. HP siswa",
    placeholder: "masukkan no. HP siswa...",
    type: "number",
  },
];

export const FormStudentDatas: TFormParentAndStudent[] = [
  {
    id: "nis",
    label: "nomor induk siswa",
    placeholder: "masukkan NIS...",
    type: "text",
  },
  {
    id: "fullname",
    label: "nama lengkap siswa",
    placeholder: "masukkan nama lengkap siswa...",
    type: "text",
  },
  {
    id: "phone",
    label: "no. HP siswa",
    placeholder: "masukkan no. HP siswa...",
    type: "number",
  },
];
