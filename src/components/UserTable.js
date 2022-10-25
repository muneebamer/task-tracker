import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const UserTable = () => {
//   for (let i = 1; i < localStorage.length; i++) {
//     const key = localStorage.key(i)
//     console.log(localStorage.getItem(key));
//   }

  return (
    <Container fluid className="mt-5 mb-5 ms-5">
        <div ><h4>User Details</h4></div>
        <hr className="mb-5 divider"></hr>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{localStorage.getItem("userId")}</td>
            <td>{localStorage.getItem("userName")}</td>
            <td>{localStorage.getItem("name")}</td>
            <td>{localStorage.getItem("email")}</td>
            <td>{localStorage.getItem("phone")}</td>
            <td>{localStorage.getItem("status")}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default UserTable;
