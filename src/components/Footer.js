import "./styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

const Footer = ({refetch}) => {
  return (
    <Row>
      <Col md={12}>
        <div className="d-flex align-items-center justify-content-between m-4 pt-3 footer">
          <div><Link to={"/formik-form"}>View Formik Form</Link></div>
          <div><Button variant="warning" onClick={refetch}>Fetch Data React Query</Button></div>   
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
