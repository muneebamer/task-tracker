import React from "react";
import Container from "react-bootstrap/Container";
import Login from "../components/Login";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../components/styles.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const user = localStorage.getItem("accessToken");
  if(user){
    return <Navigate to={`/profile/${localStorage.getItem("userId")}`} />;
  }
  return (
    <Row>
      <Col sm={12} md={6} className="d-flex align-items-center m-0 p-0">
        <Container fluid className="mt-5 mb-5 l-form pt-3 pb-5">
          <Link to={"/"}>
            <div className="pt-4 px-5 pb-3">
              <i className="bi bi-arrow-left-circle-fill"></i>
            </div>
          </Link>
          <div>
            <Login />
          </div>
        </Container>
      </Col>
      <Col sm={12} md={6}>
        <Container fluid className="m-0 p-0">
          <div className="ImageContainer"></div>
        </Container>
      </Col>
    </Row>
  );
};

export default LoginPage;
