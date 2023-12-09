import { TSingleClassName } from "@/types/componentTypes";

export const filterClassname = (
  classDatas: TSingleClassName[],
  labelClass: string
) => {
  const data = classDatas?.filter((classname) => {
    return classname.className.includes(labelClass);
  });

  return data;
};
