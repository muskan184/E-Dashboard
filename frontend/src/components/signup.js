import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigator = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigator("/");
    }
  });

  const submitData = async () => {
    console.warn(name, password, email);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigator("/");
    }
  };
  return (
    <form autoComplete="off">
      <div className="res">
        <h1>Sign Up </h1>

        <input
          className="inputBox"
          type="text"
          value={name}
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="inputBox"
          type="password"
          value={password}
          placeholder="enter password"
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          className="inputBox"
          type="email"
          value={email}
          placeholder="enter your email id "
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" className="btn" onClick={submitData}>
          SignUp
        </button>
      </div>
    </form>
  );
};
export default Signup;
