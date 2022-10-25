import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

const AddForm = () => {
  const formik = useFormik({
    initialValues: {
      task: "",
      day: "",
      reminder: false,
    },
    onSubmit: async (values) => {
      try {
        const result = await axios.post("http://localhost:5000/tasks", {
          text: values.task,
          day: values.day,
          reminder: values.reminder,
        });
        console.log(result);
        alert("Task added successfully!");
      } catch (err) {
        console.log(err);
      }
    },
  });

  //Intercept Request
  axios.interceptors.request.use(
    (config) => {
      console.log(
        `${config.method.toUpperCase()} request sent to ${
          config.url
        } at ${new Date().toLocaleTimeString()}`
      );

      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  // response interceptor
  axios.interceptors.response.use(
    function (response) {
      console.log(response);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return (
    <Row>
      <Col md={12}>
        <Form className="p-4" onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Task</Form.Label>
            <Form.Control
              id="task"
              name="task"
              type="text"
              placeholder="Add Task"
              onChange={formik.handleChange}
              value={formik.values.task}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Day & Time</Form.Label>
            <Form.Control
              id="day"
              name="day"
              type="text"
              placeholder="Add Day & Time"
              onChange={formik.handleChange}
              value={formik.values.day}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              id="reminder"
              name="reminder"
              type="checkbox"
              label="Set Reminder"
              onChange={formik.handleChange}
              value={formik.values.reminder}
            />
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            className="d-block w-100 rounded-0"
          >
            Save Task
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddForm;
