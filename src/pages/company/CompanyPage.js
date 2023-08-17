import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import CreateCompany from "./from/CreateCompany";
import AddIcon from "@mui/icons-material/Add";
import "./CompanyPage.css";

let company = [
  {
    id: "1",
    name: "company-1",
  },
  {
    id: "2",
    name: "company-2",
  },
  {
    id: "3",
    name: "company-3",
  },
];

export default function CompanyPage() {
  let [openCompanyCreateForm, setOpenCompanyCreateForm] = useState(false);

  // toggle add company form
  let formToggleHandler = () => {
    setOpenCompanyCreateForm((prevValue) => !prevValue);
  };

  let closeBackdrop = () => {
    setOpenCompanyCreateForm(false);
  };

  return (
    <div className="company-container">
      <div className="company-header">
        <span className="company-header_text">Companies</span>
        <span className="company-header_button" onClick={formToggleHandler}>
          <AddIcon sx={{ fontSize: 19 }} />
          Add Company
        </span>
      </div>
      <div className="company-body">
        <div className="companies">
          {company.map((company, index) => (
            <div className="company">
              <div className="row-1">
                <div className="company-row">
                  <div className="row-label">Company Name</div>
                  <div className="row-content-cname">{company.name}</div>
                </div>
                <div className="company-row">
                  <div className="row-label">Owner Name</div>
                  <div className="row-content-oname">Owner Name</div>
                </div>
              </div>
              <div className="row-2">
                <div className="company-row">
                  <div className="row-label">Phone</div>
                  <div className="row-content-ph">987654321</div>
                </div>
                <div className="company-row">
                  <div className="row-label">GST No</div>
                  <div className="row-content-gst">123456789</div>
                </div>
              </div>
              <div className="company-row">
                <div className="row-label">Address</div>
                <div className="row-content-gst">
                  <span className="address-1">
                    Street name, apartment name, name
                  </span>
                  <br />
                  <span className="address-2">
                    city, state, country - 123123
                  </span>
                </div>
              </div>
              <div className="company-row">
                <div className="row-label">Bank</div>
                <div className="row-content-bank">
                  <span>HDFC Bank of Baroda India Bank</span> <br />
                  <span>09876543198765432</span>
                  <br />
                  <span>2134321423</span>
                </div>
              </div>
              <div className="company-btns">
                <span className="company-button-edit">Edit</span>
                <span className="company-button-separator">|</span>
                <span className="company-button-delete">Delete</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openCompanyCreateForm}
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          closeBackdrop();
        }}
      >
        {/* Create Form */}
        {openCompanyCreateForm && (
          <AnimatePresence>
            <motion.div
              key="createInvoice-sidebar"
              initial={{ x: "-200%" }}
              animate={{
                x: "0%",
                transition: {
                  type: "spring",
                  stiffness: 80,
                  damping: 17,
                  duration: 0.7,
                },
              }}
              exit={{ x: -700, transition: { duration: 0.2 } }}
            >
              <CreateCompany formToggleHandler={formToggleHandler} />
            </motion.div>
          </AnimatePresence>
        )}
      </Backdrop>
    </div>
  );
}
