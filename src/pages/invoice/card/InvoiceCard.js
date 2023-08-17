import React from "react";
import "../InvoicePage.css";
import { Link } from "react-router-dom";

export default function InvoiceCard(props) {
  const { invoice } = props;

  return (
    <Link to={`${invoice.id}`}>
      <div className="table-card">
        <span>{invoice.id}</span>
        <span>Invoice No</span>
        <span>Date</span>
        <span>Buyer</span>
        <span>Total</span>
        <span>Status</span>
      </div>
    </Link>
  );
}
