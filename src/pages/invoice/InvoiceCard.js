import React from "react";
import "./InvoicePage.css"

export default function InvoiceCard() {
  return (
    <div className="table-card">
      <span>S.No</span>
      <span>Invoice No</span>
      <span>Date</span>
      <span>Buyer</span>
      <span>Quantity</span>
      <span>Total</span>
      <span>Status</span>
    </div>
  );
}
