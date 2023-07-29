import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import AddItems from "./AddItems";
import "./CreateInvoice.css";
import { Button } from "@mui/material";

export default function CreateInvoice(props) {
  let {
    formOpenHandler,
    formData,
    setFormData,
    item,
    setItem,
    addItemHandler,
    productChangeHandler,
  } = props;

  // product delete handler
  const deleteItemHandler = (id) => {
    setItem((pervState) => pervState.filter((el) => el.id !== id));
  };

  return (
    <div className="add-form">
      <div className="header">
        <h2>
          <span>C</span>reate <span>I</span>nvoice
        </h2>
      </div>
      <div className="form-container">
        {/* From Section */}
        <section className="from">
          <p className="section-label">Bill From</p>
          <div className="row from-address-1">
            <div className="column">
              <label htmlFor="from-street-address">Street Address</label>
              <input
                className="add-invoice-form_input"
                type="text"
                defaultValue={formData.fromStreetAddress}
                id="from-street-address"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.fromStreetAddress = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
          </div>
          <div className="row from-address-2">
            <div className="column">
              <label htmlFor="city">City</label>
              <input
                className="add-invoice-form_input"
                type="text"
                defaultValue={formData.fromCity}
                id="city"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.fromCity = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="state">State</label>
              <input
                className="add-invoice-form_input"
                type="text"
                defaultValue={formData.fromState}
                id="state"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.fromState = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="from-pincode">Pin Code</label>
              <input
                className="add-invoice-form_input"
                defaultValue={formData.frompinCode}
                type="text"
                id="from-pincode"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.frompinCode = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
          </div>
          <div className="row bank-details">
            <div className="column">
              <label htmlFor="acc-no">Bank Account Number</label>
              <input
                className="add-invoice-form_input"
                defaultValue={formData.accountNo}
                type="text"
                id="acc-no"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.accountNo = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="holder-name">Holder Name</label>
              <input
                className="add-invoice-form_input"
                defaultValue={formData.holderName}
                type="text"
                id="holder-name"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.holderName = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="ifsc">IFSC Code</label>
              <input
                className="add-invoice-form_input"
                defaultValue={formData.ifscCode}
                type="text"
                id="ifsc"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.ifscCode = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
          </div>
          <hr />
        </section>
        {/* To Section */}
        <section className="to">
          <p className="section-label">Bill To</p>
          <div className="row to-name-date">
            <div className="column">
              <label htmlFor="buyer-name">Buyer Name</label>
              <input
                className="add-invoice-form_input"
                defaultValue={formData.buyerName}
                type="text"
                id="buyer-name"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.buyerName = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="date">Date</label>
              <input
                className="add-invoice-form_input"
                defaultValue={formData.date}
                type="text"
                id="date"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.date = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
          </div>
          <div className="row to-address-1">
            <div className="column">
              <label htmlFor="to-street-address">Street Address</label>
              <input
                className="add-invoice-form_input"
                defaultValue={formData.toStreetAddress}
                type="text"
                id="to-street-address"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.toStreetAddress = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
          </div>
          <div className="row to-address-2">
            <div className="column">
              <label htmlFor="to-city">City</label>
              <input
                className="add-invoice-form_input"
                defaultValue={formData.toCity}
                type="text"
                id="to-city"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.toCity = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="to-state">State</label>
              <input
                className="add-invoice-form_input"
                defaultValue={formData.toState}
                type="text"
                id="to-state"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.toState = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="to-pincode">Pin Code</label>
              <input
                className="add-invoice-form_input"
                defaultValue={formData.topinCode}
                type="text"
                id="to-pincode"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.topinCode = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
          </div>
          <div className="row to-gst-state_code">
            <div className="column">
              <label htmlFor="to-gst">GST No</label>
              <input
                className="add-invoice-form_input"
                defaultValue={formData.gstNo}
                type="text"
                id="to-gst"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.gstNo = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="state-code">State Code</label>
              <input
                className="add-invoice-form_input"
                defaultValue={formData.stateCode}
                type="text"
                id="state-code"
                onChange={(e) =>
                  setFormData((prevValue) => {
                    prevValue.stateCode = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
          </div>
          <hr />
        </section>
        {/* Items Section */}
        <section className="items">
          <p className="section-label">Items List</p>
          {item.map((itemDetails, index) => (
            <AddItems
              key={index}
              itemDetails={itemDetails}
              deleteItemHandler={deleteItemHandler}
              productChangeHandler={productChangeHandler}
            />
          ))}
          <hr />
        </section>
        <section className="add-button">
          <button onClick={addItemHandler}>Add New Item</button>
        </section>
      </div>
      <div className="footer">
        <button className="close" onClick={formOpenHandler}>
          Close
        </button>
        <button
          className="submit"
          onClick={() => {
            formOpenHandler();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
