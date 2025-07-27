import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← Add this line
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ← Initialize

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });

    // Add authentication logic here (optional)

    navigate("/"); // ← Redirect to home
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
