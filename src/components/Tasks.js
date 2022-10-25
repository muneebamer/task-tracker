import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import { Link } from "react-router-dom";

const Tasks = ({ task, onDelete, onToggle }) => {
  return (
    <Row>
      <Col md={12}>
        <div className="p-4">
          {task.map((task) => (
            <div
              key={task.id}
              className={`taskItem px-3 pt-2 pb-1 mb-3 ${
                task.reminder ? "reminder" : ""
              }`}
              onDoubleClick={() => onToggle(task.id)}
            >
              <h6 className="d-flex justify-content-between">
                {task.text}
                <i
                  className="bi bi-x-circle"
                  onClick={() => onDelete(task.id)}
                ></i>
              </h6>
              <p className="d-flex justify-content-between">
                {task.day}
                <Link to={`/task/${task.id}`}>
                  <i className="bi bi-arrow-right-square-fill"></i>
                </Link>
              </p>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Tasks;
