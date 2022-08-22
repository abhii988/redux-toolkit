import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Nav = ({ Logout }) => {
  // const user = localStorage.getItem("username");
  const navStyle = {
    color: "whitesmoke",
    textDecoration: "none",
  };
  return (
    <>
      <nav>
        <NavLink activeClassName="active" style={navStyle} to="/">
          <h3>Logo</h3>
        </NavLink>
        <ul className="nav-links">
          <NavLink activeClassName="active" style={navStyle} to="/about">
            <li>About Page</li>
          </NavLink>
          <NavLink activeClassName="active" style={navStyle} to="/shop">
            <li>Users Page</li>
          </NavLink>
          <NavLink activeClassName="active" style={navStyle} to={`/dashboard`}>
            <li>Dashboard</li>
          </NavLink>
          {/* <NavLink
            activeClassName="active"
            style={navStyle}
            to={`/profile/${user}`}
          >
            <li>Profile</li>
          </NavLink> */}
          <NavLink activeClassName="active" style={navStyle} to={`/profile`}>
            <li>Profile</li>
          </NavLink>
          <li>
            <button value="LOGOUT" onClick={Logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
