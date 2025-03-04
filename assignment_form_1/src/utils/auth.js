// src/utils/auth.js
export const authenticateUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);
    return user ? true : false;
  };
  
  export const registerUser = (userData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
  };
  
  export const logoutUser = () => {
    localStorage.removeItem("isAuthenticated");
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem("isAuthenticated") === "true";
  };