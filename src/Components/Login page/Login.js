import React, { useState } from "react";
import facebooklogo from "../../assets/facebooklogo.png"
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "./config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        if (
          e.message ===
          "Firebase: Error (auth/wrong-password)."
        ) {
          alert("Wrong Passwored , Please try again !");
        } else if (
          e.message ===
          "Firebase: Error (auth/user-not-found)."
        ) {
          alert("Please check your credentials again");
        } else {
          alert(e.message);
        }
      });
  };
  return (
    <div className="login">
      <img src={facebooklogo} className="login_logo"></img>
      <div className="login_container">
        <h3>Log In To Facebook</h3>
        <form>
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} type="submit" className="login_login">
            Log In
          </button>
          <div className="sideinfo">
            <h5>Forgotten Password ?</h5>
            <h5 className="dot">.</h5>
            <Link className="register_link" to="/register">
              <h5 className="register">Sign Up For Facebook</h5>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
