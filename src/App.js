import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1> hello world</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>  
          {/* // here i just changed the path to " / " from "/ register" */}
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//
