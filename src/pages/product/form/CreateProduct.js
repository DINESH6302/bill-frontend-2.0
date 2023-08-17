import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { v4 as uuid } from "uuid";

export default function CreateProduct(props) {
  let { formToggleHandler } = props;

  // New Variant Form Values
  const [variant, setVariant] = useState([
    {
      id: uuid(),
      variantName: "",
      variantShortDesc: "",
      variantLongDesc: "",
      price: "",
    },
  ]);

  // New Product From Values
  const [productFormData, setProductFormData] = useState({
    productName: "",
    unit: "",
    hsnCode: "",

    variants: variant,
  });

  // add new variant handler
  let addVariantHandler = () => {
    setVariant((variants) => [
      ...variants,
      {
        id: uuid(),
        variantName: "",
        variantShortDesc: "",
        variantLongDesc: "",
        price: "",
      },
    ]);
  };

  // item input change handler
  const productChangeHandler = (id, e) => {
    let data = [...variant];

    let foundData = data.find((el) => el.id === id);
    foundData[e.target.name] = e.target.value;
    setVariant(data);
  };

  // product delete handler
  const deleteProductHandler = (id) => {
    setVariant((prev) => prev.filter((ele) => ele.id !== id));
  };

  return (
    <div className="add-form">
      <div className="header">
        <h2>
          <span>C</span>reate <span>P</span>roduct
        </h2>
      </div>
      <div className="form-container">
        {/* Product Section */}
        <section className="from">
          <p className="section-label">Product</p>
          <div className="row product-row">
            <div className="column">
              <label htmlFor="variant-name">Product Name</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                type="text"
                defaultValue={productFormData.variantName}
                id="variant-name"
                onChange={(e) =>
                  setProductFormData((prevValue) => {
                    prevValue.variantName = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="hsnCode">HSN Code</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                defaultValue={productFormData.hsnCode}
                type="text"
                id="hsnCode"
                onChange={(e) =>
                  setProductFormData((prevValue) => {
                    prevValue.hsnCode = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
            <div className="column">
              <label htmlFor="unit">Unit</label>
              <input
                autoComplete="off-random"
                className="add-invoice-form_input"
                type="text"
                defaultValue={productFormData.unit}
                id="unit"
                onChange={(e) =>
                  setProductFormData((prevValue) => {
                    prevValue.unit = e.target.value;
                    return prevValue;
                  })
                }
              />
            </div>
          </div>
          <hr />
        </section>
        {/* Variants Section */}
        <section className="items">
          <p className="section-label">Variant List</p>
          {variant.map((variantDetails, index) => (
            <div className="row variant-list">
              <div className="column">
                <label htmlFor="variant-name">Variant Name</label>
                <input
                  autoComplete="off"
                  value={variantDetails.variantName}
                  type="text"
                  id="variant-name"
                  name="variantName"
                  onChange={(e) => {
                    productChangeHandler(variantDetails.id, e);
                  }}
                />
              </div>
              <div className="column">
                <label htmlFor="short-desc">Short Description</label>
                <input
                  autoComplete="off"
                  value={variantDetails.variantShortDesc}
                  type="text"
                  id="short-desc"
                  name="variantShortDesc"
                  onChange={(e) => {
                    productChangeHandler(variantDetails.id, e);
                  }}
                />
              </div>
              <div className="column">
                <label htmlFor="long-description">Long Description</label>
                <input
                  autoComplete="off"
                  value={variantDetails.variantLongDesc}
                  type="text"
                  id="long-description"
                  name="variantLongDesc"
                  onChange={(e) => {
                    productChangeHandler(variantDetails.id, e);
                  }}
                />
              </div>
              <div className="column">
                <label htmlFor="price">Price</label>
                <input
                  autoComplete="off"
                  value={variantDetails.price}
                  type="text"
                  id="price"
                  name="price"
                  onChange={(e) => {
                    productChangeHandler(variantDetails.id, e);
                  }}
                />
              </div>
              <div
                className="column delete-button"
                onClick={() => deleteProductHandler(variantDetails.id)}
              >
                {variant.length > 1 && (
                  <DeleteOutlineIcon sx={{ fontSize: 28 }} />
                )}
              </div>
            </div>
          ))}
          <hr />
        </section>
        <section className="add-button">
          <button onClick={addVariantHandler}>Add New Variant</button>
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
