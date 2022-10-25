import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Tasks from "../components/Tasks";
import Alert from "react-bootstrap/Alert";
import AddTask from "../components/AddTask";
import Footer from "../components/Footer";
import {
  fetchTasks,
  fetchTasksId,
} from "../Services/taskServices";
import {useAddTaskData, useDelTaskData, usePutTaskData} from "../Hooks/useTaskData";
import { useQuery } from "react-query";

import { useState } from "react";

const Home = () => {
  const [showAdd, setshowAdd] = useState(false);

  const onSuccess = (data) => {
    console.log("Data fetched successfully", data);
  };

  const onError = (err) => {
    console.log("Error! Invalid response", err);
  };

  const {data, refetch } = useQuery(
    ["tasks"],
    fetchTasks,
    { refetchOnWindowFocus: false, onSuccess, onError }
  );


  //Mutation for delete task
  const {mutate: delTask} = useDelTaskData();
  const deleteTask = async (id) => {
    delTask(id);
    console.log("deleted:", id);
  };


  //Mutation for add task
  const {mutate: addNewTask} = useAddTaskData();
  const addTask = async (ntask) => {
    addNewTask(ntask);
  };

  //double click reminder function
  const {mutate: putTask} = usePutTaskData();
  const toggleReminder = async (id) => {
    const tasktoToggle = await fetchTasksId(id);
    const updTask = { ...tasktoToggle, reminder: !tasktoToggle.reminder };
    // console.log(updTask);
    putTask(id, updTask);
  };

  const showForm = () => {
    setshowAdd(!showAdd);
  };

  return (
    <Container fluid className="mt-5 mb-5 task-tracker">
      <Header showForm={showForm} formState={showAdd} />
      {showAdd && <AddTask onAdd={addTask} />}
      {data ? (
        <Tasks task={data} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <div className="p-4">
          <Alert variant="warning">No Tasks to Show</Alert>
        </div>
      )}
      <Footer refetch={refetch} />
    </Container>
  );
};

export default Home;
