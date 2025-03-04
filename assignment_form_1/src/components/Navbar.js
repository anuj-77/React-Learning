// src/components/Navbar.js
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;