import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styling.css";
import Navbar from "../components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(ev) {
    ev.preventDefault();

    await axios
      .post("https://dvashdrinks-back.onrender.com/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Login successful");
        localStorage.setItem("token", res.data.token);

        navigate("/drinks");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="position-relative background">
        <Navbar />
        <div className="container">
          <div className="theform">
            <form>
              <h1 className="fs-3 text-white">Welcome back!</h1>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />

              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button onClick={submit}>Submit</button>
              <ToastContainer />
              <div className="goSignUp">
                <span>Yet to Signup?</span>
                <span>
                  {" "}
                  <Link to={"/sign-up/"}>Signup page</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
