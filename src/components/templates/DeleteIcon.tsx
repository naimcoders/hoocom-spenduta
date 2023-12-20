import { TrashIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

type TDelete = {
  title: string;
  onCLick: () => void;
  style?: string;
};

const DeleteIcon: FC<TDelete> = ({ title, onCLick, style }) => {
  return (
    <TrashIcon
      className={`${style} w-4 h-4 text-red-500 cursor-pointer none-highlight`}
      title={title}
      onClick={onCLick}
    />
  );
};

export default DeleteIcon;
