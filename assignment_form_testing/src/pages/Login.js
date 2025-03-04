import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';
import formConfig from "./FormConfig";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission, e.g., send data to an API
      console.log('Email:', email);
      console.log('Password:', password);
      
    };
    // const onClick = (event) =>{

    // }
  
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <h4>Don't have an Account: SignUp</h4>
          <Link to = "/SignUp"><button type="Sign" >Signup</button></Link>
        </form>
      </div>
    );
  }
  
  export default Login;


  // const Login = ()=> {
  //   const initialValues = formConfig.login.reduce((acc,field) =>{
  //     acc[field.name] = field.type === 'checkbox' ? false : '';
  //     return acc;
  //   },{});

  //   const [formData,setFormData] = useState(initialValues);

  //   const handleChange = (e) => {
  //     const {name, value, type} = e.target;   
  //   setFormData({...formData,[name]:value});
  //   }
  //   const handleSubmit = (e) => {
  //     e.preventDefault
  //   };
    
  //   return (
  //     <form className="form-container" onSubmit = {handleSubmit}>
  //       {formConfig.login.map((field, index) =>(
  //         <div className="form-field" key={index} >
  //           <label className="form-label">{field.label}</label>

  //           {['']}

  //         </div>
  //        ))}
  //     </form>
  //   )
  // }














  

