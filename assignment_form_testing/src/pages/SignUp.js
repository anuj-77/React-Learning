import React, { useState } from 'react';
import formConfig from './FormConfig';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const initialValues = formConfig.signup.reduce((acc, field) => {
    acc[field.name] = field.type === 'checkbox' ? false : '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialValues);
  const [newErrors, setErrors] = useState();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const newErrors = 0;
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      existingUsers.push(formData);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      alert("Successful");
      navigate("/login");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {formConfig.signup.map((field, index) => (
        <div className="form-field" key={index}>
          <label className="form-label">{field.label}</label>

          {['text', 'email', 'number', 'password'].includes(field.type) && (
            <input
              className="form-input"
              type={field.type}
              value={formData[field.name]}
              name={field.name}
              onChange={handleChange}
            />
          )}

          {field.type === 'textarea' && (
            <textarea
              className="form-textarea"
              value={formData[field.name]}
              name={field.name}
              onChange={handleChange}
            />
          )}

          {field.type === 'radio' && (
            <div className="form-radio-group">
              {field.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    value={option}
                    name={field.name}
                    checked={formData[field.name] === option}
                    onChange={handleChange}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}

          {field.type === 'select' && (
            <select
              className="form-select"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            >
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}

          {field.type === 'checkbox' && (
            <div className="form-checkbox-group">
              <input
                type="checkbox"
                name={field.name}
                checked={formData[field.name]}
                onChange={handleChange}
              />
              <label>{field.label}</label>
            </div>
          )}
        </div>
      ))}
      <button className="form-button" type="submit">Submit</button>

    </form>
  );
};

export default SignUp;
