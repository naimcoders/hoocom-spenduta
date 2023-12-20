import { usePatchEmployeeById } from "@/hooks/use-admin";
import { useModalStore } from "@/store/modalStore";
import useUserStore from "@/store/userStore";
import { FormValues } from "@/utils/form-props";
import { UseFormHandleSubmit } from "react-hook-form";

type handleSubmit = UseFormHandleSubmit<FormValues, undefined>;
const EditEmployee = (handleSubmit: handleSubmit) => {
  const { isUpdateEmployee, setIsUpdateEmployee } = useModalStore();
  const { accountType } = useUserStore();
  const { selectedClass, employeeId } = useUserStore();
  const setIsModal = () => setIsUpdateEmployee(!isUpdateEmployee);

  const { id, role } = employeeId;
  const { mutateAsync } = usePatchEmployeeById(id, role);

  const onSubmit = handleSubmit(async (e) => {
    const newData = {
      ...e,
      role: accountType,
      className: selectedClass ?? "",
    };

    await mutateAsync(newData);
  });

  return {
    onSubmit,
    setIsModal,
    isUpdateEmployee,
  };
};

export default EditEmployee;
