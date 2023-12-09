import { TBaseUser } from "@/types/commonTypes";

type TeacherRelation = {
  id: string;
  nip: string;
  className: string;
  userId: string;
};

type AdminRelation = {
  id: string;
  nip: string;
  status: string;
  userId: string;
};

export type EmployeeCardProps = {
  title: string;
  id: string;
  fullname: string;
  phone: string;
  email: string;
  period: string;
  role: string;
  admin: AdminRelation;
  teacher: TeacherRelation;
};

export const filterEmployee = (
  labelFilter: string,
  employeeDatas?: TBaseUser[]
) => {
  const filterEmployee = employeeDatas?.filter((employee) => {
    return employee.role.includes(labelFilter);
  });

  // const sortByClass = employeeDatas
  //   .sort((a, b) => a?.teacher?.className?.localeCompare(b?.teacher?.className))
  //   .filter((employee) => {
  //     return employee.role.includes(labelFilter);
  //   });
  const sortByClass = employeeDatas?.filter((employee) => {
    return employee.role.includes(labelFilter);
  });

  return { filterEmployee, sortByClass };
};
