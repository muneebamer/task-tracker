import { getData, delData, postData, putData } from "../Network/Network";

export const fetchTasks = async () => {
  const res = await getData(`tasks`);

  const data = res.data;

  return data;
};

export const fetchTasksId = async (id) => {
  const res = await getData(`tasks/${id}`);

  const data = res.data;

  return data;
};

export const delTasks = async (id) => {
  const res = await delData(`tasks/${id}`);

  const data = res.data;

  return data;
};

export const addTasks = async (obj) => {
    const res = await postData(`tasks`,obj);
  
    const data = res.data;
  
    return data;
  };

  export const putTasks = async (id,obj) => {
    console.log(obj);
    const res = await putData(`tasks/${id}`,obj);
  
    const data = res.data;
  
    return data;
  };
