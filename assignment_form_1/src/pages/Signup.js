// src/pages/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupFields } from "../config/FormConfig";
import { registerUser } from "../utils/auth";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
    localStorage.setItem("isAuthenticated", "true");
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit}>
      {signupFields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          {field.type === "select" ? (
            <select
              name={field.name}
              onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === "radio" ? (
            field.options.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name={field.name}
                  value={option}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                />
                <label>{option}</label>
              </div>
            ))
          ) : (
            <input
              type={field.type}
              name={field.name}
              onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
            />
          )}
          {errors[field.name] && <span>{errors[field.name]}</span>}
        </div>
      ))}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;