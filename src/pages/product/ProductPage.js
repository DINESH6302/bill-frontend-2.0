import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreateProduct from "./form/CreateProduct";
import "./ProductPage.css";

let products = [
  {
    id: 1,
    name: "Product 1",
    price: 1000,
    description: "This is a description of product 1",
    variants: [
      {
        id: 101,
        name: "Variant 101",
      },
      {
        id: 102,
        name: "Variant 102",
      },
      {
        id: 103,
        name: "Variant 103",
      },
      {
        id: 104,
        name: "Variant 104",
      },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    price: 1000,
    description: "This is a description of product 2",
    variants: [
      {
        id: 201,
        name: "Variant 201",
      },
      {
        id: 202,
        name: "Variant 202",
      },
      {
        id: 203,
        name: "Variant 203",
      },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    price: 1000,
    description: "This is a description of product 3",
    variants: [
      {
        id: 301,
        name: "Variant 301",
      },
      {
        id: 302,
        name: "Variant 302",
      },
    ],
  },
  {
    id: 4,
    name: "Product 4",
    price: 1000,
    description: "This is a description of product 4",
    variants: [
      {
        id: 401,
        name: "Variant 401",
      },
      {
        id: 402,
        name: "Variant 402",
      },
    ],
  },
];

export default function ProductPage() {
  let [openProductCreateForm, setOpenProductCreateForm] = useState(false);
  let [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  let [deleteProduct, setDeleteProduct] = useState(-1);
  let [expand, setExpand] = useState(-1);

  // toggle add product form
  let formToggleHandler = () => {
    setOpenProductCreateForm((prevValue) => !prevValue);
  };

  // toggle delete dialog
  let deleteToggleHandler = (index = -1) => {
    setDeleteProduct(index);
    setOpenDeleteDialog((prevValue) => !prevValue);
  };

  // close backdrop
  let closeBackdrop = () => {
    setOpenDeleteDialog(false);
    setOpenProductCreateForm(false);
  };

  // expand product info
  let expandHandler = (index) => {
    setExpand((prevIndex) => (prevIndex === index ? -1 : index));
  };

  // delete product
  let deleteProductHandler = () => {
    products = products.filter((_, ind) => ind !== deleteProduct);
    setDeleteProduct(-1);
    closeBackdrop();
  };

  // Highlight background of input
  if (openProductCreateForm) {
    const inputElements = document.querySelectorAll("input");

    inputElements.forEach((inputElement) => {
      console.log(inputElement);
      inputElement.addEventListener("input", () => {
        if (inputElement.value.trim() !== "") {
          inputElement.style.borderColor = "#008cff";
        } else {
          inputElement.style.borderColor = "";
        }
      });
    });
  }

  return (
    <>
      <div className="product-container">
        <div className="product-container-top">
          <span className="product-heading"> Products </span>
          <div className="product-add-button" onClick={formToggleHandler}>
            <AddIcon sx={{ fontSize: 19 }} />
            Add Product
          </div>
        </div>
        <div className="products">
          {products.map((product, index) => (
            <div
              key={index}
              className={index === expand ? "expand product" : "product"}
            >
              <div className="product-header">
                <div className="s-no-div">
                  <div className="label">S.No</div>
                  <div>1</div>
                </div>
                <div className="name-div">
                  <div className="label">Product Name</div>
                  <div>Cotton Cotton</div>
                </div>
                <div className="unit-div">
                  <div className="label">Unit</div>
                  <div>KG</div>
                </div>
                <div className="hsn-code-div">
                  <div className="label">HSN Code</div>
                  <div>43532312</div>
                </div>
                <div className="total-variant-div">
                  <div className="label">No of Variants</div>
                  <div>4</div>
                </div>
                <div className="expand-button">
                  <KeyboardArrowDownIcon onClick={() => expandHandler(index)} />
                </div>
              </div>
              <div className="product-variants">
                <div className="variant-header">
                  <span>S.No</span>
                  <span>Variant Name</span>
                  <span>Short Description</span>
                  <span>Long Description</span>
                  <span>Price</span>
                </div>
                <div className="variant">
                  <span>S.No</span>
                  <span>Variant Name</span>
                  <span>Short Description</span>
                  <span>Long Description</span>
                  <span>Price</span>
                </div>
                <div className="variant">
                  <span>S.No</span>
                  <span>Variant Name</span>
                  <span>Short Description</span>
                  <span>Long Description</span>
                  <span>Price</span>
                </div>
                <div className="variant">
                  <span>S.No</span>
                  <span>Variant Name</span>
                  <span>Short Description</span>
                  <span>Long Description</span>
                  <span>Price</span>
                </div>
                <div className="variant">
                  <span>S.No</span>
                  <span>Variant Name</span>
                  <span>Short Description</span>
                  <span>Long Description</span>
                  <span>Price</span>
                </div>
              </div>
              <div className="product-buttons">
                <span className="product-button-edit">Edit</span>
                <span className="product-button-separator">|</span>
                <span
                  className="product-button-delete"
                  onClick={() => deleteToggleHandler(index)}
                >
                  Delete
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Create Product From */}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openProductCreateForm || openDeleteDialog}
          onClick={(e) => {
            if (e.target !== e.currentTarget) return;
            closeBackdrop();
          }}
        >
          {/* Create Form */}
          {openProductCreateForm && (
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
                <CreateProduct formToggleHandler={formToggleHandler} />
              </motion.div>
            </AnimatePresence>
          )}

          {/* Delete box */}
          {openDeleteDialog && (
            <div className="delete-container">
              <div className="text">Are you sure want to delete?</div>
              <div className="delete-buttons">
                <span className="btn-cancel" onClick={closeBackdrop}>
                  Cancel
                </span>
                <span className="btn-delete" onClick={deleteProductHandler}>
                  Delete
                </span>
              </div>
            </div>
          )}
        </Backdrop>
      </div>
    </>
  );
}
