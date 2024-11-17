import React, { useState } from "react";

export const Signup = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const submitData = async () => {
    console.warn(name, pass, email);
    const result = await fetch("http://localhost:3000/register", {
      method: "post",
      body: JSON.stringify({ name, pass, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.warn(await result.json());
  };
  return (
    <div className="res">
      <h1>Sign Up </h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter your name"
      />
      <input
        className="inputBox"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="enter password"
      />
      <input
        className="inputBox"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter your email id "
      />
      <button type="button" className="btn" onClick={submitData}>
        SignUp
      </button>
    </div>
  );
};
