import React, { useState } from "react";
import NavBar from "./pages/nav/NavBar";
import InvoicePage from "./pages/invoice/InvoicePage";
import InvoiceInfo from "./pages/invoice/info/InvoiceInfo";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product/ProductPage";
import CompanyPage from "./pages/company/CompanyPage";

function App() {
  let [invoices, setInvoices] = useState([
    { id: 1, status: "active" },
    { id: 2, status: "Draft" },
    { id: 3, status: "Generated" },
    { id: 4, status: "active" },
    { id: 5, status: "Draft" },
    { id: 6, status: "Generated" },
    // { id: 7, status: "Draft" },
    // { id: 8, status: "active" },
  ]);

  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <AnimatePresence mode="wait">
          {/* Dashboard */}
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/dashboard" element={<></>} />
            {/* Invoice */}
            <Route
              path="/invoices"
              element={
                <InvoicePage invoices={invoices} setInvoices={setInvoices} />
              }
            />
            <Route
              path="/invoices/:id"
              element={<InvoiceInfo invoices={invoices} />}
            />
            {/* Product */}
            <Route path="/products" element={<ProductPage />} />
            {/* Company */}
            <Route path="/companies" element={<CompanyPage />} />
            {/* Profile */}
            <Route path="/profile" element={""} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
