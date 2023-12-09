import { useQueryClient, QueryKey } from "@tanstack/react-query";

export const useQueryClientHook = () => {
  const queryClient = useQueryClient();
  const refetchAfterMutation = (queryKey: QueryKey) => {
    return queryClient.refetchQueries({ queryKey });
  };
  return { queryClient, refetchAfterMutation };
};
