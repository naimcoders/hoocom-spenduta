import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

type TInformation = {
  title: string;
  onCLick: () => void;
};

const InformationIcon: FC<TInformation> = ({ title, onCLick }) => {
  return (
    <InformationCircleIcon
      className="w-4 h-4 text-dark cursor-pointer none-highlight"
      title={title}
      onClick={onCLick}
    />
  );
};

export default InformationIcon;
