import { useDeleteEmployee } from "@/hooks/use-admin";

const DeleteEmployee = () => {
  const { mutateAsync } = useDeleteEmployee();

  const deleteCard = async (role: string, userId: string) => {
    const data = {
      role,
      userId,
    };

    await mutateAsync(data);
  };

  return {
    deleteCard,
  };
};

export default DeleteEmployee;
