import { create } from "zustand";

type ModalStoreProps = {
  isGeneralData: boolean;
  setIsGeneralData: (value: boolean) => void;

  isCreateClass: boolean;
  setIsCreateClass: (value: boolean) => void;

  isCreateLesson: boolean;
  setIsCreateLesson: (value: boolean) => void;

  isCreateEmployee: boolean;
  setIsCreateEmployee: (value: boolean) => void;

  isUpdateEmployee: boolean;
  setIsUpdateEmployee: (value: boolean) => void;

  isCreateStudent: boolean;
  setIsCreateStudent: (value: boolean) => void;

  isFindPhoneNumber: boolean;
  setIsFindPhoneNumber: (value: boolean) => void;

  isCreateParentAndStudent: boolean;
  setIsCreateParentAndStudent: (value: boolean) => void;

  isShowInfoUser: boolean;
  setIsShowInfoUser: (value: boolean) => void;

  isCreateTeacherLesson: boolean;
  setIsCreateTeacherLesson: (value: boolean) => void;

  isSubmitPresences: boolean;
  setIsSubmitPresences: (value: boolean) => void;

  isFirstModal: boolean;
  setIsFirstModal: (value: boolean) => void;

  isSecondModal: boolean;
  setIsSecondModal: (value: boolean) => void;

  isThirthModal: boolean;
  setIsThithModal: (value: boolean) => void;
};

export const useModalStore = create<ModalStoreProps>((set) => ({
  isGeneralData: false,
  setIsGeneralData: (value) => set(() => ({ isGeneralData: value })),

  isCreateClass: false,
  setIsCreateClass: (value) => set(() => ({ isCreateClass: value })),

  isCreateLesson: false,
  setIsCreateLesson: (value) => set(() => ({ isCreateLesson: value })),

  isCreateEmployee: false,
  setIsCreateEmployee: (value) => set(() => ({ isCreateEmployee: value })),

  isUpdateEmployee: false,
  setIsUpdateEmployee: (value) => set(() => ({ isUpdateEmployee: value })),

  isCreateStudent: false,
  setIsCreateStudent: (value) => set(() => ({ isCreateStudent: value })),

  isFindPhoneNumber: false,
  setIsFindPhoneNumber: (value) => set(() => ({ isFindPhoneNumber: value })),

  isShowInfoUser: false,
  setIsShowInfoUser: (value) => set(() => ({ isShowInfoUser: value })),

  isCreateTeacherLesson: false,
  setIsCreateTeacherLesson: (value) =>
    set(() => ({ isCreateTeacherLesson: value })),

  isCreateParentAndStudent: false,
  setIsCreateParentAndStudent: (value) =>
    set(() => ({ isCreateParentAndStudent: value })),

  isSubmitPresences: false,
  setIsSubmitPresences: (value) => set(() => ({ isSubmitPresences: value })),

  isFirstModal: false,
  setIsFirstModal: (value) => set(() => ({ isFirstModal: value })),
  isSecondModal: false,
  setIsSecondModal: (value) => set(() => ({ isSecondModal: value })),
  isThirthModal: false,
  setIsThithModal: (value) => set(() => ({ isThirthModal: value })),
}));
