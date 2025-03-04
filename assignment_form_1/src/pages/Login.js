// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFields } from "../config/FormConfig";
import { authenticateUser } from "../utils/auth";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authenticateUser(formData.email, formData.password)) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loginFields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
          />
          {errors[field.name] && <span>{errors[field.name]}</span>}
        </div>
      ))}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;