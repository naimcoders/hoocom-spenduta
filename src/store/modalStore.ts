import { create } from "zustand"

interface ModalStoreProps {
  isGeneralData: boolean
  setIsGeneralData: (value: boolean) => void
}

export const useModalStore = create<ModalStoreProps>(set => ({
  isGeneralData: false,
  setIsGeneralData: (value) =>
    set(() => ({ isGeneralData: value }))
}))