import "./styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.clear();
    navigate("/");

  }
  return (
    <Row>
      <Col md={12}>
        <div className="d-flex align-items-center justify-content-between p-4">
          <div><h3>{props.title}</h3></div>
          <div className="d-flex">
            <div><Button variant={!props.formState? "dark" : "danger"} onClick={props.showForm} className="me-3">{!props.formState ? 'Add' : 'Hide'}</Button></div>
            <div><Button variant="dark" onClick={logout}>Logout</Button></div>        
          </div>
        </div>
      </Col>
    </Row>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

export default Header;
