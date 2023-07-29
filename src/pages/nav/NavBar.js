import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./NavBar.css";

window.addEventListener("scroll", (e) => {
  const navigationElement = document.querySelector(".navigation");
  if (window.pageYOffset !== 0) navigationElement.classList.add("scroll");
  else navigationElement.classList.remove("scroll");
});

export default function NavBar() {
  let [selectedValue, setSelectedValue] = useState("");

  // toggle drop down
  let dropDownHandler = () => {
    document
      .querySelector(".select-company")
      .classList.toggle("dropdown-active");

    // add focus for input
    document.querySelector(".dropdown").focus();
  };

  // window.addEventListener("click", () => {
  // document
  //   .querySelector(".select-company").classList.remove("dropdown-active")
  // });

  let selectOptionHandler = (e) => {
    let selectedValue = e.target.innerText;

    // set selected value
    setSelectedValue(selectedValue);

    // toggle options
    dropDownHandler();
  };

  return (
    <div className="navigation">
      {/* Logo */}
      <div className="logo">
        <h3>LOGO</h3>
      </div>

      <div className="nav-links">
        {/* Drop down */}
        <div className="select-company">
          <input
            type="text"
            className="dropdown"
            placeholder="Select Company"
            value={selectedValue}
            readOnly
            onClick={dropDownHandler}
          />
          <div className="options">
            <div onClick={selectOptionHandler}>Company A</div>
            <div onClick={selectOptionHandler}>Company B</div>
            <div onClick={selectOptionHandler}>Company C</div>
            <div onClick={selectOptionHandler}>Company D</div>
            <div onClick={selectOptionHandler}>Company E</div>
          </div>
          <span className="dropdown-icon" onClick={dropDownHandler}>
            <ExpandMoreIcon sx={{ fontSize: 30 }} />
          </span>
        </div>
        {/* nav links */}
        <ul>
          <li>
            <NavLink to="/dashboard" className="activeLink">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/invoices" className="activeLink">
              Invoice
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="activeLink">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/companies" className="activeLink">
              Company
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="activeLink">
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
