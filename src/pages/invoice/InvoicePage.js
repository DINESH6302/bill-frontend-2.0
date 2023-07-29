import React, { useState, useEffect } from "react";
import InvoiceCard from "./card/InvoiceCard";
import CreateInvoice from "./form/CreateInvoice";
import AddIcon from "@mui/icons-material/Add";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { v4 as uuid } from "uuid";
import SearchIcon from "@mui/icons-material/Search";
import Backdrop from "@mui/material/Backdrop";
import Fab from "@mui/material/Fab";
import "./InvoicePage.css";

let invoices = [1, 2, 3, 4, 5, 6];

export default function InvoicePage() {
  const controls = useAnimation();

  let [openCreateForm, setOpenCreateForm] = useState(false);

  //SECTION - New Invoice From Values
  const [formData, setFormData] = useState({
    fromStreetAddress: "",
    fromCity: "",
    fromState: "",
    frompinCode: "",
    accountNo: "",
    holderName: "",
    ifscCode: "",

    buyerName: "",
    date: "",
    toStreetAddress: "",
    toCity: "",
    toState: "",
    topinCode: "",
    gstNo: "",
    stateCode: "",
  });

  // New INvoice Product Form Values
  const [item, setItem] = useState([
    {
      product: "",
      variant: "",
      quantity: 0,
      pricePerQty: 0,
      hsnCode: 0,
      total: 0,
      id: uuid(),
    },
  ]);

  // toggle add form
  let formOpenHandler = () => {
    setOpenCreateForm((prevValue) => !prevValue);
  };

  // add new item handler
  let addItemHandler = () => {
    setItem((item) => [
      ...item,
      {
        product: "",
        variant: "",
        quantity: 0,
        pricePerQty: 0,
        hsnCode: 0,
        total: 0,
        id: uuid(),
      },
    ]);
  };

  //
  const productChangeHandler = (id, e) => {
    let data = [...item];

    let foundData = data.find((el) => el.id === id);
    foundData[e.target.name] = e.target.value;
    setItem(data);
  };

  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    });
  }, [controls]);

  // Highlight background of input
  if (true) {
    const inputElements = document.querySelectorAll("#from-street-address");

    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        if (inputElement.value.trim() !== "") {
          inputElement.style.borderColor = "#008cff";
        } else {
          inputElement.style.borderColor = "";
        }
      });
    });
  }

  return (
    <div className="invoice-container">
      {/* Table Actions */}
      <div className="invoice-action">
        {/* Invoice add button */}
        <div className="invoice-add-button">
          <AddIcon sx={{ fontSize: 20 }} />
          <span> Add Invoice</span>
        </div>
        {/* Search */}
        <div className="invoice-search">
          <input type="text" placeholder="Search" className="search-input" />
          <span className="search-icon">
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className="invoice-table">
        {/* Table header */}
        <div className="table-header">
          <span>S.No</span>
          <span>Invoice No</span>
          <span>Date</span>
          <span>Buyer</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Status</span>
        </div>
        {/* Table rows */}
        <div className="table-rows">
          {invoices.map((invoice, index) => (
            <motion.div
              key={invoice.id}
              initial={{ opacity: 0, x: -200 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: index * 0.25 },
              }}
            >
              <InvoiceCard />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="invoice-add">
        <Fab color="primary" aria-label="add" onClick={setOpenCreateForm}>
          <AddIcon />
        </Fab>
      </div>
      {openCreateForm && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openCreateForm}
          onClick={(e) => {
            if (e.target !== e.currentTarget) return;
            formOpenHandler();
          }}
        >
          <AnimatePresence>
            <motion.div
              key="createInvoice-sidebar"
              initial={{ x: "-200%" }}
              animate={{
                x: "0%",
                transition: {
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  duration: 0.7,
                },
              }}
              exit={{ x: -700, transition: { duration: 0.2 } }}
            >
              <CreateInvoice
                formOpenHandler={formOpenHandler}
                formData={formData}
                setFormData={setFormData}
                item={item}
                setItem={setItem}
                addItemHandler={addItemHandler}
                productChangeHandler={productChangeHandler}
              />
            </motion.div>
          </AnimatePresence>
        </Backdrop>
      )}
    </div>
  );
}
