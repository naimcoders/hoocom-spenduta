import {
  TGetAttendances,
  TLabelAssessment,
  TValueAssessment,
} from "@/types/componentTypes";
import { TDataParentAndStudent } from "@/utils/response-type";
import { create } from "zustand";

type TDataParentById = {
  id: string;
  fullname: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type TPresences = {
  studentId: string;
  classnameId: string;
  lessonId: string;
  status: string;
  description?: string;
};

type TTwoDatas = { first: string; second: string };

type GeneralStoreProps = {
  dataId: string;
  setDataId: (value: string) => void;
  twoDatas: TTwoDatas;
  setTwoDatas: (value: TTwoDatas) => void;
  clearTwoDatas: () => void;

  singleParent?: TDataParentById | undefined;
  setSingleParent: (value: TDataParentById | undefined) => void;

  students?: TDataParentAndStudent | undefined;
  setStudents: (value: TDataParentAndStudent | undefined) => void;

  selectedLesson?: string;
  setSelectedLesson: (value?: string) => void;

  presences: TPresences[];
  setPresences: (presence: TPresences[]) => void;

  typeAssessment: string | TLabelAssessment;
  setTypeAssessment: (value: TLabelAssessment) => void;

  attendances?: TGetAttendances[];
  setAttendances: (value?: TGetAttendances[]) => void;

  assessmentValues?: TValueAssessment[];
  setAssessmentValues: (value?: TValueAssessment[]) => void;
  selectedClass?: string;
  setSelectedClass: (value?: string) => void;
};

export const useGeneralStore = create<GeneralStoreProps>((set) => ({
  dataId: "",
  setDataId: (value) => set(() => ({ dataId: value })),
  twoDatas: {
    first: "",
    second: "",
  },
  setTwoDatas: (value) => set({ twoDatas: value }),
  clearTwoDatas: () => set({ twoDatas: { first: "", second: "" } }),

  setSingleParent: (value) => set(() => ({ singleParent: value })),

  setStudents: (value) => set(() => ({ students: value })),

  setSelectedLesson: (value) => set(() => ({ selectedLesson: value })),

  presences: [],
  setPresences: (value) => set(() => ({ presences: value })),

  typeAssessment: "",
  setTypeAssessment: (value) => set(() => ({ typeAssessment: value })),

  setAttendances: (value) => set(() => ({ attendances: value })),
  setAssessmentValues: (value) => set(() => ({ assessmentValues: value })),
  setSelectedClass: (value) => set({ selectedClass: value }),
}));
