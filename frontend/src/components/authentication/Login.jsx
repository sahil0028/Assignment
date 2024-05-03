import React, { useState } from "react";
import "./AdminLogin.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import loginLottie from '../../assets/party.json'
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [cred, setCred] = useState({ email: "", password: "" });
  const [spin, setSpin] = useState(false);

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setSpin((prev) => !prev);

    axios.post('http://localhost:3000/auth/login',cred).then((response)=>{
      if (response.data.sucess && response.data.data.status) {
        toast.success("Login Sucessful");
        sessionStorage.setItem("token", response.data.token);
        navigate("/");
        setSpin((prev) => setSpin(!prev));
      } else {
        setSpin((prev) => setSpin(!prev));
        toast.error("Invalid Credentials");
      }
    }).catch((err)=>{
      console.log(err)
      toast.error("Some error occured Try again later");
      setSpin((prev) => setSpin(!prev));
    })
  };

  return (
    <div className="wholeALogin">
      <HashLoader
        color="#36d7b7"
        loading={spin}
        cssOverride={{
          display: "block",
          margin: "80px auto",
          position: "absolute",
          top: "30vh",
          right: "50vw",
        }}
      />
      <div className="login_Left">
        <div className="login_left_animation">
          <Lottie animationData={loginLottie} loop={true}  />
        </div>
      </div>
      <div className="login_Right">
        <div className="title">
          <h2>Welcome Back</h2>
          <small>Sign in to continue</small>
        </div>
        <form onSubmit={handleSubmit} className={`spin${spin}`}>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter mail"
            onChange={handleChange}
            required
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div className="signup">Don't have an account? <Link to={'/signup'}>signup</Link></div>
      </div>
    </div>
  );
};

export default Login;
