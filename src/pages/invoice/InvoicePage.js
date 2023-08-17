import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import InvoiceCard from "./card/InvoiceCard";
import CreateInvoice from "./form/CreateInvoice";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Fab from "@mui/material/Fab";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import "./InvoicePage.css";

export default function InvoicePage(props) {
  let { invoices, setInvoices } = props;
  const INVOICES_PER_PAGE = 6;

  const navigate = useNavigate();
  const location = useLocation();

  // USE STATES
  const [currentPage, setCurrentPage] = useState(1);
  let [openInvoiceCreateForm, setOpenInvoiceCreateForm] = useState(false);
  let [loading, setLoading] = useState(true);

  // toggle add invoice form
  let formOpenHandler = () => {
    setOpenInvoiceCreateForm((prevValue) => !prevValue);
  };

  // Highlight background of input
  if (openInvoiceCreateForm) {
    const inputElements = document.querySelectorAll("input");

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

  // update array data for page
  // useEffect(() => {
  //   let from = INVOICES_PER_PAGE * (currentPage - 1);
  //   let to = from + INVOICES_PER_PAGE;
  //   console.log(from, to);
  //   setInvoices(invoices.slice(from, to));
  // }, [currentPage]);

  // change page url & number
  const handlePageChange = (event, page) => navigate(`?page=${page}`);

  //
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get("page");
    setCurrentPage(parseInt(page, 10) || 1);
  }, [handlePageChange]);

  // skeleton loading
  setTimeout(() => setLoading(false), 500);

  let invoiceTable = (
    <>
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
          <span>Total</span>
          <span>Status</span>
        </div>
        {/* Table rows */}
        <div className="table-rows">
          {invoices.map((invoice, index) => (
            <motion.div
              // key={invoice.id}
              // initial={{ opacity: 0, y: 0 }}
              // animate={{
              //   opacity: 1,
              //   x: 0,
              //   transition: { delay: index * 0.25 },
              // }}
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.15 },
              }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.25 }}
            >
              <InvoiceCard invoice={invoice} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="invoice-add">
        <Fab
          color="primary"
          aria-label="add"
          onClick={setOpenInvoiceCreateForm}
        >
          <AddIcon />
        </Fab>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ x: "0" }}
      animate={{ x: 0 }}
      exit={{ x: "-150%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="invoice-container">
        {/* Table Actions */}
        {loading ? (
          <Stack
            spacing={2}
            sx={{ marginTop: 5, alignItems: "flex-end", opacity: 0.5 }}
          >
            <Skeleton
              variant="rounded"
              width="20%"
              height={30}
              sx={{ marginBottom: 5 }}
            />
            <Skeleton variant="rounded" width="100%" height={50} />
            <Skeleton variant="rounded" width="100%" height={50} />
            <Skeleton variant="rounded" width="100%" height={50} />
            <Skeleton variant="rounded" width="100%" height={50} />
            <Skeleton variant="rounded" width="100%" height={50} />
            <Skeleton variant="rounded" width="100%" height={50} />
            <Skeleton variant="rounded" width="100%" height={50} />
            <Skeleton variant="rounded" width="100%" height={50} />
            <Skeleton variant="rounded" width="100%" height={50} />
          </Stack>
        ) : (
          invoiceTable
        )}
        {openInvoiceCreateForm && (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openInvoiceCreateForm}
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
                    damping: 17,
                    duration: 0.7,
                  },
                }}
                exit={{ x: -700, transition: { duration: 0.2 } }}
              >
                <CreateInvoice formOpenHandler={formOpenHandler} />
              </motion.div>
            </AnimatePresence>
          </Backdrop>
        )}
        {!loading && (
          <Pagination
            count={10}
            page={currentPage}
            className="pagination"
            sx={{ userSelect: "none" }}
            onChange={handlePageChange}
          />
        )}
      </div>
    </motion.div>
  );
}
