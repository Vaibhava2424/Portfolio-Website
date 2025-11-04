import React from "react";
import { NavLink } from "react-router-dom";
import { User } from "lucide-react";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        ProtWeb
      </NavLink>

      <div className="nav-right">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-btn active-nav" : "nav-btn"}
        >
          Home
        </NavLink>

        <NavLink 
          to="/profile" 
          className={({ isActive }) => isActive ? "profile-btn active-nav" : "profile-btn"}
        >
         <User size={22} />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
