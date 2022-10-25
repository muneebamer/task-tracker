import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useState } from "react";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        onAdd({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);

    }

  return (
    <Row>
      <Col md={12}>
        <Form className="p-4" onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicTask">
            <Form.Label>Task</Form.Label>
            <Form.Control type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDay">
            <Form.Label>Day & Time</Form.Label>
            <Form.Control type="text" placeholder="Add Day & Time" value={day} onChange={(e)=>setDay(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Set Reminder" value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
          </Form.Group>
          <Button variant="dark" type="submit" className="d-block w-100 rounded-0">
            Save Task
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddTask;
