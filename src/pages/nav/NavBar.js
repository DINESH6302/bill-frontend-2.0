import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Drawer from "@mui/material/Drawer";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import classNames from "classnames";
import "./NavBar.css";

window.addEventListener("scroll", (e) => {
  const navigationElement = document.querySelector(".navigation");
  if (window.pageYOffset !== 0) navigationElement.classList.add("scroll");
  else navigationElement.classList.remove("scroll");
});

export default function NavBar() {
  let [selectedValue, setSelectedValue] = useState("");
  const [sideBar, setSideBar] = useState(false);
  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [isPassChange, setIsPassChange] = useState(false);

  const toggleSideBar = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setSideBar((preValue) => !preValue);

    // clear profile actions
    setIsProfileEdit(false);
    setIsPassChange(false);
  };

  // toggle drop down
  let dropDownHandler = () => {
    const dropdown = document.querySelector(".select-company");

    dropdown.classList.toggle("dropdown-active");

    // add focus for input
    document.querySelector(".dropdown").focus();

    // close dropdown while clicking outside
    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target))
        dropdown.classList.remove("dropdown-active");
    });
  };

  let selectOptionHandler = (e) => {
    let selectedValue = e.target.innerText;

    // set selected value
    setSelectedValue(selectedValue);

    // toggle options
    dropDownHandler();
  };

  // edit profile handler
  let isProfileEditHandler = () => {
    setIsProfileEdit((preValue) => !preValue);
  };

  // change password handler
  let isChangePassHandler = () => {
    setIsPassChange((preValue) => !preValue);
  };

  return (
    <>
      <div className="navigation">
        {/* Logo */}
        <div className="logo">
          <h3>LOGO</h3>
        </div>

        <div className="nav-links">
          {/* Drop down */}
          <div className="select-company" onClick={(e) => {}}>
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
            <li className="profile-img">
              <a>
                <AccountCircleOutlinedIcon
                  sx={{ fontSize: 34 }}
                  onClick={toggleSideBar}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* {sideBar} */}
      <Drawer anchor={"right"} open={sideBar} onClose={toggleSideBar}>
        <div className="side-bar">
          <div className="side-bar_header">
            <span className="header-profile">Profile</span>
            <CloseOutlinedIcon
              sx={{ fontSize: 27 }}
              className="side-bar_close"
              onClick={toggleSideBar}
            />
          </div>
          <div className="side-bar_body">
            <div className="side-bar_body__row">
              <span className="label">Name</span>
              <input
                type="text"
                id="profile-input"
                disabled={!isProfileEdit}
                style={{
                  border: `${isProfileEdit ? "2px" : "1px"} solid ${
                    isProfileEdit ? "#068fff" : "gray"
                  }`,
                }}
              ></input>
            </div>
            <div className="side-bar_body__row">
              <span className="label">Email</span>
              <input type="email" disabled></input>
            </div>
            <div className="side-bar_body__row">
              <span className="label">Phone</span>
              <input
                type="text"
                id="profile-input"
                disabled={!isProfileEdit}
                style={{
                  border: `${isProfileEdit ? "2px" : "1px"} solid ${
                    isProfileEdit ? "#068fff" : "gray"
                  }`,
                }}
              ></input>
            </div>
            <div className="side-bar_body__row links">
              <span
                className="change-password"
                onClick={isChangePassHandler}
                style={{
                  color: `${isPassChange ? "#068fff" : ""}`,
                  fontWeight: `${isPassChange ? "600" : ""}`,
                }}
              >
                Change Password
              </span>
              <span
                className="edit-profile"
                onClick={isProfileEditHandler}
                style={{
                  color: `${isProfileEdit ? "#068fff" : ""}`,
                  fontWeight: `${isProfileEdit ? "600" : ""}`,
                }}
              >
                Edit
              </span>
            </div>
            <div
              className={classNames(
                "change-pass-container",
                isPassChange ? "show" : ""
              )}
            >
              <div className="side-bar_body__row">
                <span className="label">Current Password</span>
                <input type="text"></input>
              </div>
              <div className="side-bar_body__row">
                <span className="label">New Password</span>
                <input type="text"></input>
              </div>
            </div>
            {(isPassChange || isProfileEdit) && (
              <div className="side-bar_body__row profile-submit">
                <span className="profile-submit">Submit</span>
              </div>
            )}
            <div className="side-bar_body__row logout">
              <span className="logout">Logout</span>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
