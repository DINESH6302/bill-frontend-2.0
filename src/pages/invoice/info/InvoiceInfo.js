import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import "./InvoiceInfo.css";

export default function InvoiceInfo(props) {
  let { invoices } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  let [loading, setLoading] = useState(true);

  //get the invoice
  const invoice = invoices.find((inv) => inv.id === parseInt(id));

  //   scroll to top of invoice details
  //   useEffect(() => {
  // window.scrollTo(0, 0);
  //   }, []);

  // skeleton loading
  setTimeout(() => setLoading(false), 500);

  const infoContainer = (
    <div className="info-container">
      {/* Section 1 - back button */}
      <div className="go-back" onClick={() => navigate(-1)}>
        <ArrowBackIosIcon sx={{ fontSize: 13, color: "#068fff" }} />
        <span>Go back</span>
      </div>
      {/* Section 2 - actions */}
      <div className="status-action">
        <div className="invoice-status">
          <span>Status</span>
          <div className="status-name">
            <FiberManualRecordIcon sx={{ fontSize: 15 }} />
            {invoice.status}
          </div>
        </div>
        <div className="action-buttons">
          <span className="edit">
            <ModeEditOutlineOutlinedIcon sx={{ fontSize: 20 }} />
            Edit
          </span>
          <span className="delete">
            <DeleteOutlineIcon sx={{ fontSize: 20 }} />
            Delete
          </span>
          <span className="save">
            <SaveOutlinedIcon sx={{ fontSize: 20 }} />
            Save
          </span>
          <span className="download">
            <SaveAltIcon sx={{ fontSize: 20 }} />
            Download
          </span>
        </div>
      </div>
      {/* Section 3 - details */}
      <div className="info">
        {/* from */}
        <div className="from-section">
          <div className="from-section_d1">
            <span className="from-section_d1_id">
              <span className="from-section_d1_id_tag"> # </span>
              <span className="from-section_d1_id_number"> 123213 </span>
            </span>
            <span className="from-section_d1_date">
              <span className="date-label label">Invoice Date</span>
              <span className="date">Dec 12, 2023</span>
            </span>
          </div>
          <div className="from-section_d2">
            <span className="from-section_d2_name">Abc Traders</span>
            <span className="from-section_d2_gstno">
              <span className="from-section_d2_gst_label label">Gst No</span>
              <span className="from-gstno">12345678910</span>
            </span>
          </div>
        </div>
        {/* to */}
        <div className="to-section">
          <div className="to-section_d1">
            <span className="to-section_d1_name_label label">Bill To</span>
            <span className="to-name">Xyz Traders</span>
          </div>
          <div className="to-section_d2">
            <span className="to-section_d2_address_label label">Address</span>
            <span className="to-address">
              <span className="to-address_street">Street Address</span>
              <span className="to-address_city">City</span>
              <span className="to-address_state">State</span>
              <span className="to-address_pincode">638751</span>
            </span>
          </div>
          <div className="to-section_d3">
            <span className="to-section_d3_get">
              <span className="to-section_d3_gst_label label">Gst No</span>
              <span className="to-gstno">12345678910</span>
            </span>
            <span className="to-section_d3_state_code">
              <span className="to-section_d3_state_code_label label">
                State Code
              </span>
              <span className="to-state-code">908</span>
            </span>
          </div>
        </div>
        {/* items */}
        <div className="items-section">
          <div className="items-section_header">
            <span>Product</span>
            <span>Variant</span>
            <span>Quantity</span>
            <span>Price per Qty</span>
            <span>Hsn Code</span>
            <span>Total</span>
          </div>
          <div className="items-section_item">
            <span>Product</span>
            <span>Variant</span>
            <span>12</span>
            <span>2313</span>
            <span>4535</span>
            <span>454364</span>
          </div>
          <div className="items-section_item">
            <span>Product</span>
            <span>Variant</span>
            <span>12</span>
            <span>2313</span>
            <span>4535</span>
            <span>454364</span>
          </div>
          <div className="items-section_item">
            <span>Product</span>
            <span>Variant</span>
            <span>12</span>
            <span>2313</span>
            <span>4535</span>
            <span>454364</span>
          </div>
        </div>
        {/* amount */}
        <div className="amount-section">
          <div className="amount-section_d1_taxes">
            <div className="tax">
              <span className="tax-label">GST</span>
              <span className="tax-amount">2343</span>
            </div>
            <div className="tax">
              <span className="tax-label">IGST</span>
              <span className="tax-amount">2343</span>
            </div>
            <div className="tax">
              <span className="tax-label">SGST</span>
              <span className="tax-amount">2343</span>
            </div>
            <div className="tax">
              <span className="tax-label">CGST</span>
              <span className="tax-amount">2343</span>
            </div>
          </div>
          <div className="amount-section_d2_total">
            <span className="amount-section_d2_total_label label">Total</span>
            <span className="amount-section_d2_total_amount">2343</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    // <motion.div
    //   key="invoice-info"
    //   initial={{ x: 0 }}
    //   animate={{ x: 0 }}
    //   exit={{ x: "200%" }}
    //   transition={{ duration: 0.5 }}
    // >

    <div className="info-main-container">
      {loading === true ? (
        <Stack
          spacing={2}
          sx={{ marginTop: 5, opacity: 0.5 }}
          className="info-skeleton"
        >
          <Skeleton variant="rounded" width="20%" height={30} />
          <Skeleton variant="rounded" width="100%" height={100} />
          <Skeleton variant="rounded" width="100%" height={500} />
        </Stack>
      ) : (
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
          exit={{ x: 700, transition: { duration: 0.2 } }}
        >
          {infoContainer}
        </motion.div>
      )}
    </div>
  );
}
