import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginNavbar from "../components/LoginNavbar";
import Home from "./Home";
import UserTable from "../components/UserTable";
// import { useNavigate } from "react-router-dom";

const Profile = () => {
  //const navigate = useNavigate();
 
  const menu = JSON.parse(localStorage.getItem("menu"));
  return (
    <Container fluid>
      <Row>
        <LoginNavbar menu={menu} />
      </Row>
      <Row className="mt-5">
        <Col className="ms-5">
          <UserTable />
        </Col>
        <Col>
          <Home />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
