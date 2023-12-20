import { TBaseUser } from "@/types/commonTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type EmployeeIdProps = {
  id: string;
  role: string;
};

type UserProps = {
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
  setUser: (value?: TBaseUser) => void;
}

// export const useAuth = create<TuseAuth>((set) => ({
//   setUser: async () => {
//     try {
//       auth.onAuthStateChanged(async (user) => {
//         const token = await user?.getIdTokenResult();
//         const id = token?.claims?.user_id;

//         if (id) {
//           const uri = `${uriGetUserById}/${id}`;
//           const { data } = await getUserById(uri);
//           set({ user: data });
//         } else {
//           set({ user: undefined });
//         }
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   },
// }));

export const useAuth = create<TuseAuth>((set) => ({
  setUser: (value) => set({ user: value }),
}));
