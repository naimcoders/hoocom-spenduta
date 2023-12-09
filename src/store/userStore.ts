import { uriGetUserById } from "@/api/user-api";
import { getUserById } from "@/api/user.api";
import { auth } from "@/configs/firebase";
import { TBaseTeacher, TBaseUser } from "@/types/commonTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const user: TBaseTeacher = {
  id: "",
  fullname: "",
  phone: "",
  email: "",
  period: "",
  role: "",
  createdAt: "",
  updatedAt: "",
  urlImage: "",
  imageName: "",
  admin: {
    nip: "",
    status: "",
  },
  teacher: {
    nip: "",
    className: "",
  },
};

type EmployeeIdProps = {
  id: string;
  role: string;
};

type UserProps = {
  userData: TBaseTeacher;
  setUserData: (value: TBaseTeacher) => void;
  setRemoveUserData: () => void;

  isAuth: boolean;
  setIsAuth: (value: boolean) => void;

  accountType: string;
  setAccountType: (value: string) => void;

  selectedClass?: string;
  setSelectedClass: (value?: string) => void;

  employeeId: EmployeeIdProps;
  setEmployeeId: (id: EmployeeIdProps) => void;
  resetEmployeeId: (id: EmployeeIdProps) => void;
};

const useUserStore = create<UserProps, [["zustand/persist", UserProps]]>(
  persist(
    (set) => ({
      userData: user,
      setUserData: (value) => set(() => ({ userData: value })),
      setRemoveUserData: () => set(() => ({ userData: user })),
      isAuth: false,
      setIsAuth: (value) => set(() => ({ isAuth: value })),
      accountType: "",
      setAccountType: (value) => set(() => ({ accountType: value })),
      setSelectedClass: (value) => set(() => ({ selectedClass: value })),
      employeeId: { id: "", role: "" },
      setEmployeeId: (values) => set(() => ({ employeeId: values })),
      resetEmployeeId: (values) => set(() => ({ employeeId: values })),
    }),
    {
      name: "user-store",
    }
  )
);

export default useUserStore;

interface TuseAuth {
  user?: TBaseUser;
  setUser: () => void;
}

export const useAuth = create<TuseAuth>((set) => ({
  setUser: async () => {
    try {
      auth.onAuthStateChanged(async (user) => {
        const token = await user?.getIdTokenResult();
        const id = token?.claims?.user_id;
        const uri = `${uriGetUserById}/${id}`;
        const { data } = await getUserById(uri);

        set({
          user: data,
        });
      });
    } catch (e) {
      console.error(e);
    }
  },
}));
