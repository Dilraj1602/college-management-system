import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddCourses from "./components/AddCourses";
import CreateForm from "./components/CreateForm";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addcourse" element={<AddCourses />} />
        <Route path="/createform" element={<CreateForm />} />
      </Routes>
    </div>
  )
}

export default App;
