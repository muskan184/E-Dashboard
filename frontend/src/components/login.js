import React, { useState } from "react";

const Login = () => {
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const handlelogin = () => {
    console.log(email, password);
  };
  return (
    <form autoComplete="off">
      <div className="res">
        <h1>Login </h1>

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
        <button type="button" className="btn" onClick={handlelogin}>
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
