// src/config/FormConfig.js
export const loginFields = [
    {
      type: "email",
      name: "email",
      label: "Email ID",
      placeholder: "Enter your email",
      validation: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      validation: {
        required: true,
        minLength: 6,
        maxLength: 20,
      },
    },
  ];
  
  export const signupFields = [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      placeholder: "Enter your first name",
      validation: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter your last name",
      validation: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },
    },
    {
      type: "number",
      name: "phone",
      label: "Phone No",
      placeholder: "Enter your phone number",
      validation: {
        required: true,
        pattern: /^\d{10}$/,
      },
    },
    {
      type: "email",
      name: "email",
      label: "Email ID",
      placeholder: "Enter your email",
      validation: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
    {
      type: "radio",
      name: "gender",
      label: "Gender",
      options: ["Male", "Female"],
      validation: {
        required: true,
      },
    },
    {
      type: "select",
      name: "state",
      label: "State",
      options: ["California", "Texas", "Florida", "New York", "Washington"],
      validation: {
        required: true,
      },
    },
    {
      type: "textarea",
      name: "address",
      label: "Address",
      placeholder: "Enter your address",
      validation: {
        maxLength: 100,
      },
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      validation: {
        required: true,
        minLength: 6,
        maxLength: 20,
      },
    },
    {
      type: "password",
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Confirm your password",
      validation: {
        required: true,
        validate: (value, { password }) => value === password,
      },
    },
    {
      type: "checkbox",
      name: "terms",
      label: "I agree to the terms and conditions",
      validation: {
        required: true,
      },
    },
  ];