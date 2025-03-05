import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; import formConfig from '../config/FormConfig';
import {Link } from "react-router-dom";
import './Login.css';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [messageLogin, setMessageLogin] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();


        const storedUserData = JSON.parse(localStorage.getItem('formData'));


        const email = event.target.email.value;
        const password = event.target.password.value;


        if (storedUserData && storedUserData.email === email && storedUserData.password === password) {

            console.log('Login successful!');
            setMessageLogin('Login Successful')
            navigate('/Home')


        } else {

            setErrorMessage('Invalid email or password.');
        }
    };

    return (
        <div className="login-container">

            <h1>Login</h1>

            <form className="login-form" onSubmit={handleSubmit}>

                {formConfig.login.map((field, index) => (

                    <div key={index} className="input-group">

                        <label htmlFor={field.name}>{field.label}</label>

                        <input
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            required={field.required}
                            minLength={field.minLength}
                            maxLength={field.maxLength}
                            pattern={field.pattern?.toString().slice(1, -1)} // Convert regex to string and remove slashes
                        />

                    </div>
                ))}

                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {messageLogin && <p className="login-message">{messageLogin}</p>}

                <button className="button" type="submit">Login</button>

                <p className="signup-prompt">Not a User? <Link to = "/SignUp">Sign Up Now</Link></p>
            </form>
        </div>
    );
};

export default Login;
