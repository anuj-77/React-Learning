import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <>
        <h1>
            This is My Home Page.
            <Link to ="/Login">Login</Link>
            <Link to = "/SignUp">Signup</Link>
        </h1>
        </>
    );
}

export default Home;

