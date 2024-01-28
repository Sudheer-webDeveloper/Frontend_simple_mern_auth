import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // let saveNewUser= async() =>{
  //     try {
  //       let url = `http://localhost:3030/api/create-user-account`;
  //      let {data} = await axios.post(url, { ...newUser });
  //     alert(data.message);
  //     if(data.status === true){
  //       window.location.assign("/");
  //         }
  //     } catch (error) {
  // alert("server error");
  //     }

  //   };

  let handleSubmit = async () => {
    try {
      let url = "http://localhost:3001/register";
      let { result } = await axios.post(url, { name, email, password });
      alert(result.message);
      console.log(result);
    } catch (error) {
      alert("server error");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 ">
      <div className="bg-white rounded w-25 p-3 h-75">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>

            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success rounded-0 w-100">
            Register
          </button>
        </form>
        <p>Already have an account</p>
        <Link
          to="/login"
          className="btn btn-default border bg-light w-100 rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
