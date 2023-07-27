import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

window.addEventListener("scroll", (e) => {
  const navigationElement = document.querySelector(".navigation");
  if (window.pageYOffset != 0) navigationElement.classList.add("scroll");
  else navigationElement.classList.remove("scroll");
});

export default function NavBar() {
  return (
    <div className="navigation">
      <div className="logo">
        <h3>LOGO</h3>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/dashboard" activeClassName="activeLink">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/invoices" activeClassName="activeLink">
            Invoice
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="activeLink">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/companies" activeClassName="activeLink">
            Company
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="activeLink">
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
