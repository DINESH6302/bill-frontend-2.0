import React from "react";
import NavBar from "./pages/nav/NavBar";
import InvoicePage from "./pages/invoice/InvoicePage"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/dashboard" element={<></>} />
          <Route path="/invoices" element={<InvoicePage />} />
          <Route path="/products" element={""} />
          <Route path="/companies" element={""} />
          <Route path="/profile" element={""} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
