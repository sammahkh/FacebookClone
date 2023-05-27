import React, { useState } from "react";
import "./SignUp.css";
import facebooklogo from "../../assets/facebooklogo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState([]);
  const [gender, setGender] = useState("");

  const register = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      navigate("/");
    });
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1904 },
    (_, index) => currentYear - index
  );

  return (
    <div className="register">
      <img src={facebooklogo} alt="Facebook Logo" class="register__logo" />
      <div className="register__container">
        <h1>Sign Up</h1>
        <p>It's quick and easy.</p>
        <div className="hr3" />
        <form>
          <div className="row">
            <input
              className="register__name"
              type="name"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
            <input
              className="register__name"
              type="name"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </div>
          <center>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </center>
          <center>
            <input
              type="password"
              placeholder="New Password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </center>
          <h5 className="register__date">Date Of Birth</h5>
          <div className="row">
            <select
              className="register__date2"
              onChange={(e) => setBirthday([...birthday, e.target.value])}
            >
              <option value="Day">Day</option>
              {Array.from({ length: 31 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>

            <select
              className="register__date3"
              onChange={(e) => setBirthday([...birthday, e.target.value])}
            >
              <option value="Day">Month</option>
              {Array.from({ length: 12 }, (_, index) => {
                const monthIndex = index + 1;
                const monthName = new Date(0, monthIndex).toLocaleString("en", {
                  month: "short",
                });
                return (
                  <option key={monthIndex} value={monthIndex}>
                    {monthName}
                  </option>
                );
              })}
            </select>

            <select
              className="register__date3"
              onChange={(e) => setBirthday([...birthday, e.target.value])}
            >
              <option value="Year">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <h5 className="register__gender">Gender</h5>

          <div className="register__radiocontainer">
            <div className="wrapper">
              <label>Female</label>
              <input
                onChange={(e) => setGender(e.target.value)}
                required
                type="radio"
                name="gender"
                value="Female"
              />
            </div>

            <div className="wrapper">
              <label>Male</label>
              <input
                onChange={(e) => setGender(e.target.value)}
                required
                type="radio"
                name="gender"
                value="Male"
              />
            </div>
            <div className="wrapper">
              <label>Other</label>
              <input
                onChange={(e) => setGender(e.target.value)}
                required
                type="radio"
                name="gender"
                value="Other"
              />
            </div>
          </div>
          <p className="register__policy">
            By clicking Sign Up, you agree to our{" "}
            <span>Terms, Data Policy</span> and <span>Cookie Policy</span>. You
            may receive SMS notifications from us and can opt out at any time.
          </p>

          <center>
            <button
              onClick={register}
              type="submit"
              className="register__register"
            >
              Sign Up
            </button>
          </center>
          <Link to="/login">
            <p className="register__login">Already have an account?</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
