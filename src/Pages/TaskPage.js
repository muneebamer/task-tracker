import { useParams } from "react-router-dom";
import {useTaskData} from "../Hooks/useTaskData";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const TaskPage = () => {
    const {taskId} = useParams()
    const {isLoading, data, isError, error} = useTaskData(taskId);
    if(isLoading){
        return <div>Loading</div>
    }
    if (isError){
        return <h4>{error.message}</h4>
    }
    console.log(data);
    
  return (
    <Container fluid className="mt-5 mb-5">
        <div ><h4>Task Details</h4></div>
        <hr className="mb-5 divider"></hr>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Task Id</th>
            <th>Title</th>
            <th>Day</th>
            <th>Reminder</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{taskId}</td>
            <td>{data.text}</td>
            <td>{data.day}</td>
            <td>{data.reminder? 'YES' : 'NO'}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default TaskPage