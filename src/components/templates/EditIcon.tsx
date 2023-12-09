import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

type TEdit = {
  title: string;
  onClick: () => void;
};

const EditIcon: FC<TEdit> = ({ title, onClick }) => {
  return (
    <PencilSquareIcon
      className="w-4 h-4 text-dark cursor-pointer none-highlight"
      title={title}
      onClick={onClick}
    />
  );
};

export default EditIcon;
