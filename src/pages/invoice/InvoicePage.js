import React from "react";
import InvoiceCard from "./InvoiceCard";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import "./InvoicePage.css";

let invoices = [1, 2, 3, 4, 5, 6, 7];

export default function InvoicePage() {
  return (
    <div className="invoice-container">
      {/* Table Actions */}
      <div className="invoice-action">
        {/* Drop down */}
        <div className="select-company">
          <input
            type="text"
            className="drop-down"
            placeholder="Select Company"
            readOnly
          />
          <div className="options">
              <div>Company A</div>
              <div>Company B</div>
              <div>Company C</div>
              <div>Company D</div>
              <div>Company E</div>
          </div>
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
      <div className="invoice-add"></div>
    </div>
  );
}
