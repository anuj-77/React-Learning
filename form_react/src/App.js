import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  [
    {
      path: "/Home",
      element: <Home />
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: '/SignUp',
      element: <SignUp />
    },
    {
      path: '/',
      element: <HomePage />
    }

  ]
);



function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
