import { useState } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import closeEyeIcon from "@/assets/closeEye.svg";
import openEyeIcon from "@/assets/openEye.svg";
import { FormValues } from "@/utils/form-props";

type TextfieldProps = UseControllerProps<FormValues> & {
  type: string;
  placeholder: string;
  id: string;
};

const TextfieldMultipleType = (props: TextfieldProps) => {
  const { field } = useController(props);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      {props.type !== "password" ? (
        <input
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          className="bg-transparent border-[1px] border-gray-highlight rounded-lg px-3 py-2 placeholder:text-gray-highlight focus:outline-1 w-full focus:outline-secondary placeholder:text-14px placeholder:capitalize text-14px"
          autoComplete="on"
          {...field}
        />
      ) : (
        <div className="relative">
          <input
            type={!showPassword ? props.type : "text"}
            placeholder={props.placeholder}
            id={props.id}
            className="bg-transparent border-[1px] border-gray-highlight rounded-lg px-3 py-2 placeholder:text-gray-highlight focus:outline-1 w-full focus:outline-secondary placeholder:text-14px placeholder:capitalize"
            autoComplete="off"
            {...field}
          />
          <img
            src={!showPassword ? closeEyeIcon : openEyeIcon}
            alt="show password"
            className="hide-password w-5 absolute top-3 right-4 cursor-pointer"
            onClick={handleShowPassword}
          />
        </div>
      )}
    </>
  );
};

export default TextfieldMultipleType;
