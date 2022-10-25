import { useQuery, useQueryClient } from "react-query";
import { fetchTasksId, addTasks, delTasks, putTasks } from "../Services/taskServices";
import { useMutation } from "react-query";

export const useTaskData = (id) => {
  return useQuery(["task", id], () => fetchTasksId(id));
};

export const useAddTaskData = () => {
  const queryClient = useQueryClient();
  return useMutation(addTasks, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
    },
  });
};

export const useDelTaskData = () => {
    const queryClient = useQueryClient();
    return useMutation(delTasks, {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks');
      },
    });
  };

  export const usePutTaskData = () => {
    const queryClient = useQueryClient();
    return useMutation(putTasks, {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks');
      },
    });
  };
