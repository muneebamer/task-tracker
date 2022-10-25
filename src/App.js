import "./App.css";
import FormikForm from "./Pages/FormikForm";
import LoginPage from "./Pages/LoginPage";
import {Routes, Route} from "react-router-dom";
import Profile from "./Pages/Profile";
import TaskPage from "./Pages/TaskPage";
import React from "react";
import PrivateRoute from "./components/Navigation/PrivateRoute";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile/:id" element={<PrivateRoute component={Profile} />} />
        <Route path="/formik-form" element={< FormikForm />} />
        <Route path="/task/:taskId" element={< TaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
