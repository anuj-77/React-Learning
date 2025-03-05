const formConfig = {
    signup: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        required: { value: true, message: "First Name is required" },
        minLength: { value: 2, message: "First Name must be at least 2 characters" },
        maxLength: { value: 30, message: "First Name cannot exceed 30 characters" }
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        required: { value: true, message: "Last Name is required" },
        minLength: { value: 2, message: "Last Name must be at least 2 characters" },
        maxLength: { value: 30, message: "Last Name cannot exceed 30 characters" }
      },
      {
        name: "phone",
        label: "Phone No",
        type: "text", // Changed to 'text' to handle patterns correctly
        required: { value: true, message: "Phone number is required" },
        pattern: { value: /^[0-9]{10}$/, message: "Phone number must be 10 digits" }
      },
      {
        name: "email",
        label: "Email ID",
        type: "email",
        required: { value: true, message: "Email is required" },
        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" }
      },
      {
        name: "gender",
        label: "Gender",
        type: "radio",
        options: ["Male", "Female"],
        required: { value: true, message: "Gender is required" }
      },
      {
        name: "state",
        label: "State",
        type: "select",
        options: [
          "Andhra Pradesh",
          "Arunachal Pradesh",
          "Assam",
          "Bihar",
          "Chhattisgarh",
          "Goa",
          "Gujarat",
          "Haryana",
          "Himachal Pradesh",
          "Jharkhand",
          "Karnataka",
          "Kerala",
          "Madhya Pradesh",
          "Maharashtra",
          "Manipur",
          "Meghalaya",
          "Mizoram",
          "Nagaland",
          "Odisha",
          "Punjab",
          "Rajasthan",
          "Sikkim",
          "Tamil Nadu",
          "Telangana",
          "Tripura",
          "Uttar Pradesh",
          "Uttarakhand",
          "West Bengal"
        ],
        required: { value: true, message: "State is required" }
      },
      {
        name: "address",
        label: "Address",
        type: "textarea",
        maxLength: { value: 100, message: "Address cannot exceed 100 characters" }
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        required: { value: true, message: "Password is required" },
        minLength: { value: 6, message: "Password must be at least 6 characters" },
        maxLength: { value: 20, message: "Password cannot exceed 20 characters" }
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        required: { value: true, message: "Please confirm your password" },
        validate: (value, { password }) => value === password || "Passwords do not match"
      },
      {
        name: "terms",
        label: "I agree to the Terms & Conditions",
        type: "checkbox",
        required: { value: true, message: "You must agree to the terms and conditions" }
      }
    ],
    login: [
      {
        name: "email",
        label: "Email ID",
        type: "email",
        required: { value: true, message: "Email is required" },
        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" }
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        required: { value: true, message: "Password is required" },
        minLength: { value: 6, message: "Password must be at least 6 characters" },
        maxLength: { value: 20, message: "Password cannot exceed 20 characters" }
      },
      { 
        name: "confirmPassword", 
        label: "Confirm Password", 
        type: "password", 
        required:{value:true, match: "password", message:"Password are not same."} 
      },
      { name: "terms", 
        label: "I agree to the Terms & Conditions", 
        type: "checkbox", 
        required: true }
    ],



    login: [
        { 
          name: "email", 
          label: "Email ID", 
          type: "email", 
          required: true, 
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
        },
        { 
          name: "password", 
          label: "Password", 
          type: "password", 
          required: true, minLength: 6, maxLength: 20 
        }
      ]
  };
  
  export default formConfig;