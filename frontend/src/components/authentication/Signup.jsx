import React, { useState } from "react";
import "./AdminLogin.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import loginLottie from '../../assets/party.json'
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [cred, setCred] = useState({name:'',email: "",password: "" });
  const [spin, setSpin] = useState(false);

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setSpin((prev) => !prev);

    axios.post('http://localhost:3000/auth/signup',cred).then((response)=>{
      if (response.data.sucess && response.data.data.status) {
        toast.success("Login Sucessful");
        navigate("/login");
        setSpin((prev) => setSpin(!prev));
      } else {
        setSpin((prev) => setSpin(!prev));
        toast.error(response.data.message);
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
        {/* <h2 style={{ fontWeight: "bolder" }}>Hello!</h2>
        <p>Welcome back Admin (☞ﾟヮﾟ)☞</p> */}
      </div>
      <div className="login_Right">
        <div className="title">
          <h2>Welcome</h2>
          <small>Sign Up to continue</small>
        </div>
        <form onSubmit={handleSubmit} className={`spin${spin}`}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
          <br />
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
          {/* <input role="submit" value="Submit"></input> */}
          <input type="submit" value="Submit" />
        </form>
        <div className="login">Already have an account? <Link to={'/login'}>Login</Link></div>
      </div>
    </div>
  );
};

export default Signup;
