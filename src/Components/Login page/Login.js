import React from "react";
import loginlogo from "./Login-img/loginlogo.png";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <img src={loginlogo} className="login_logo"></img>
      <div className="login_container">
        <h3>Log In To Facebook</h3>
        <form>
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <button type="submit" className="login_login">
            Log In
          </button>
          <div className="sideinfo">
            <h5>Forgotten Password ?</h5>
            <h5 className="dot">.</h5>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <h5 className="register">Sign Up For Facebook</h5>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
