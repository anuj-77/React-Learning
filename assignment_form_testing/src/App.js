import logo from './logo.svg';
import React from 'react';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Home from './pages/Home';
import AuthForm from './pages/AuthForm';
import {createBrowserRouter,  RouterProvider,} from "react-router-dom";
import './App.css';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/Login",
      element:<Login/>
    },
    {
      path:'/SignUp',
      element:<Signup/>
    }

  ]
);

function App() {
  return (
    <>
    <div className="App">

    <RouterProvider router={router}/>
      
    </div>
    </>
  );
}

export default App;
