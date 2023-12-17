import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import LoginServices from "../../services/login.services";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await LoginServices.login(username, password);

      if (result.success) {
        localStorage.setItem("isLogin", "true");
        navigate("/dashboard");
      } 
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p style={{ color: "red", fontSize: 12, marginTop: -5 }}>{error}</p>
        )}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
