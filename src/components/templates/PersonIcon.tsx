import { FC } from "react";
import { UserIcon } from "@heroicons/react/24/outline";

type TUser = {
  title: string;
};

const PersonIcon: FC<TUser> = ({ title }) => {
  return <UserIcon className="w-4 h-4 text-dark" title={title} />;
};

export default PersonIcon;
