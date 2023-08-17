import React, { useState } from "react";

export default function CreateCompany(props) {
  let { formToggleHandler } = props;

  // New Company From Values
  const [companyFormData, setCompanyFormData] = useState({
    companyName: "",
    ownerName: "",
    phone: "",
    gst: "",
    address: {
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
    bank: {
      name: "",
      accountNumber: "",
      ifscCode: "",
    },
  });

  // Company delete handler
  const deleteCompanyHandler = (id) => {
    companyFormData((prev) => prev.filter((ele) => ele.id !== id));
  };

  return (
    <div className="add-form">
      <div className="header">
        <h2>
          <span>C</span>reate <span>C</span>ompany
        </h2>
      </div>
      <div className="form-container" style={{ padding: 20 }}>
        <section className="from">
          <div className="row">
            <div className="column">
              <label htmlFor="bank-name">Company Name</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                type="text"
                defaultValue={companyFormData.companyName}
                id="bank-name"
                onChange={(e) =>
                  setCompanyFormData((prevValue) => {
                    prevValue.companyName = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="ownerName">Owner Name</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={companyFormData.ownerName}
                type="text"
                id="ownerName"
                onChange={(e) =>
                  setCompanyFormData((prevValue) => {
                    prevValue.ownerName = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="phone">Phone</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                type="text"
                defaultValue={companyFormData.phone}
                id="phone"
                onChange={(e) =>
                  setCompanyFormData((prevValue) => {
                    prevValue.phone = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="gst">GST No</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={companyFormData.gst}
                type="text"
                id="gst"
                onChange={(e) =>
                  setCompanyFormData((prevValue) => {
                    prevValue.gst = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
          </div>
          {/* Address */}
          <p className="section-label">Address</p>
          <div className="row product-row">
            <div className="column">
              <label htmlFor="address-street">Street Name</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                type="text"
                defaultValue={companyFormData.address.street}
                id="address-street"
                onChange={(e) =>
                  setCompanyFormData((prevValue) => {
                    prevValue.address.street = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="address-city">City</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={companyFormData.address.city}
                type="text"
                id="address-city"
                onChange={(e) =>
                  setCompanyFormData((prevValue) => {
                    prevValue.address.city = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="address-state">State</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={companyFormData.address.state}
                type="text"
                id="address-state"
                onChange={(e) =>
                  setCompanyFormData((prevValue) => {
                    prevValue.address.state = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="address-pincode">Pincode</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={companyFormData.address.pincode}
                type="text"
                id="address-pincode"
                onChange={(e) =>
                  setCompanyFormData((prevValue) => {
                    prevValue.address.pincode = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
          </div>
          {/* Bank */}
          <p className="section-label">Bank</p>
          <div className="row product-row">
            <div className="column">
              <label htmlFor="bank-name">Bank Name</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                type="text"
                defaultValue={companyFormData.bank.name}
                id="bank-name"
                onChange={(e) =>
                  setCompanyFormData((prevValue) => {
                    prevValue.bank.name = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="bank-accountNumber">Account Number</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={companyFormData.bank.accountNumber}
                type="text"
                id="bank-accountNumber"
                onChange={(e) =>
                  setCompanyFormData((prevValue) => {
                    prevValue.bank.accountNumber = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="bank-ifscCode">IFSC Code</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={companyFormData.bank.ifscCode}
                type="text"
                id="bank-ifscCode"
                onChange={(e) =>
                  setCompanyFormData((prevValue) => {
                    prevValue.bank.ifscCode = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
          </div>
        </section>
      </div>
      <div className="footer">
        <button className="close" onClick={formToggleHandler}>
          Close
        </button>
        <button
          className="submit"
          onClick={() => {
            formToggleHandler();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
