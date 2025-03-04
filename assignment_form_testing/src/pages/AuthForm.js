import React, { useState } from 'react';
import './AuthForm.css'

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <div>
          <h2>Login</h2>
          <form>
            {/* Login form fields */}
            <div>
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{' '}
            <button onClick={toggleForm}>Sign Up</button>
          </p>
        </div>
      ) : (
        <div>
          <h2>Sign Up</h2>
          <form>
            {/* Signup form fields */}
            <div>
              <label>First Name:</label>
              <input type="text" required />
            </div>
            <div>
              <label>Last Name:</label>
              <input type="text" required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" required />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{' '}
            <button onClick={toggleForm}>Login</button>
          </p>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
