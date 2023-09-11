import { create } from 'zustand'

interface LoginStoreProps {
  accountType: string
  setAccountType: (value: string) => void
}

export const useLoginStore = create<LoginStoreProps>(set => ({
  accountType: '',
  setAccountType: (value) =>
    set(() => ({ accountType: value }))
}))