import React from 'react'
import Container from "react-bootstrap/Container";
import AddForm from '../components/AddForm';
import "../components/styles.css";
import {Link} from "react-router-dom";

const FormikForm = () => {
  const id = localStorage.getItem("userId");
  return (
    <Container fluid className="mt-5 mb-5 f-form">
      <Link to={`/profile/${id}`}><div className='pt-4 px-4'><i className="bi bi-arrow-left-circle-fill"></i></div></Link>
      <div><AddForm /></div>
    </Container>
  );
    
}

export default FormikForm;