import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LoginService } from "../Services/LoginService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await LoginService({
          email: values.email,
          password: values.password,
        });

        const user = res.data;

        localStorage.setItem("accessToken", user.data.token);
        localStorage.setItem("userId", user.data.id);
        toast.success("Login Successful", { autoClose: 1000 });

        navigate(`/profile/${localStorage.getItem("userId")}`);

        setLoading(false);
      } catch (err) {
        toast.error(`${err.response.data.message}`, { autoClose: 1000 });
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <div className="px-5">
        <h5>Welcome Back</h5>
        <p>Please enter your details</p>
        <ToastContainer />
      </div>
      <Form className="px-5" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="text"
            placeholder="Your Email Address"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Your Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          className="d-block w-100 rounded-0"
        >
          {loading ? (
            <Spinner animation="grow" size="sm" />
          ) : (
            "Sign in"
          )}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
