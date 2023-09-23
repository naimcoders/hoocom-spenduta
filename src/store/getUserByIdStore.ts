import axios from 'axios'
import { create } from 'zustand'

interface APIStore {
  userById: {
    id: string
    fullname: string
    phone: string
    email: string
    period: string
    role: string
    createdAt: string
    updatedAt: string
    admin?: {
      nip: string
      status: string
    }
    teacher?: {
      nip: string
      className: string
    }
  }
  fetch: (uri: string) => void
}

export const useGetUserByIdStore = create<APIStore>(set => ({
  userById: {
    id: '', fullname: '', phone: '',
    email: '', period: '', role: '',
    createdAt: '', updatedAt: ''
  },
  fetch: async uri => {
    const user = await axios.get(uri)
    const data = await user.data.user
    set({ userById: data })
  }
}))