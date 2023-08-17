import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import AddItems from "./AddItems";
import "./CreateInvoice.css";
import { Button } from "@mui/material";

export default function CreateInvoice(props) {
  let { formOpenHandler } = props;

  // New Invoice Product Form Values
  const [item, setItem] = useState([
    {
      id: uuid(),
      product: "",
      variant: "",
      quantity: 0,
      pricePerQty: 0,
      hsnCode: 0,
      total: 0,
    },
  ]);

  // New Invoice From Values
  const [invoiceFormData, setInvoiceFormData] = useState({
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

    items: item,
  });

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

  // product delete handler
  const deleteItemHandler = (id) => {
    setItem((prev) => prev.filter((ele) => ele.id !== id));
  };

  // item input change handler
  const itemChangeHandler = (id, e) => {
    let data = [...item];

    let foundData = data.find((el) => el.id === id);
    foundData[e.target.name] = e.target.value;
    setItem(data);
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
                autoComplete="off-random"
                className="add-invoice-form_input"
                type="text"
                defaultValue={invoiceFormData.fromStreetAddress}
                id="from-street-address"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
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
                autoComplete="off-random"
                className="add-invoice-form_input"
                type="text"
                defaultValue={invoiceFormData.fromCity}
                id="city"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
                    prevValue.fromCity = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="state">State</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                type="text"
                defaultValue={invoiceFormData.fromState}
                id="state"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
                    prevValue.fromState = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="from-pincode">Pin Code</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={invoiceFormData.frompinCode}
                type="text"
                id="from-pincode"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
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
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={invoiceFormData.accountNo}
                type="text"
                id="acc-no"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
                    prevValue.accountNo = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="holder-name">Holder Name</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={invoiceFormData.holderName}
                type="text"
                id="holder-name"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
                    prevValue.holderName = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="ifsc">IFSC Code</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={invoiceFormData.ifscCode}
                type="text"
                id="ifsc"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
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
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={invoiceFormData.buyerName}
                type="text"
                id="buyer-name"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
                    prevValue.buyerName = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="date">Date</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={invoiceFormData.date}
                type="text"
                id="date"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
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
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={invoiceFormData.toStreetAddress}
                type="text"
                id="to-street-address"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
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
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={invoiceFormData.toCity}
                type="text"
                id="to-city"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
                    prevValue.toCity = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="to-state">State</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={invoiceFormData.toState}
                type="text"
                id="to-state"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
                    prevValue.toState = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="to-pincode">Pin Code</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={invoiceFormData.topinCode}
                type="text"
                id="to-pincode"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
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
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={invoiceFormData.gstNo}
                type="text"
                id="to-gst"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
                    prevValue.gstNo = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="state-code">State Code</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={invoiceFormData.stateCode}
                type="text"
                id="state-code"
                onChange={(e) =>
                  setInvoiceFormData((prevValue) => {
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
              itemsSize={item}
              itemDetails={itemDetails}
              deleteItemHandler={deleteItemHandler}
              itemChangeHandler={itemChangeHandler}
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
