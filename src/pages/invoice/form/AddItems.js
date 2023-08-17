import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function AddItems(props) {
  return (
    <div>
      <div className="row item-list">
        <div className="column">
          <label htmlFor="product">Product</label>
          <input
            autoComplete="off"
            value={props.itemDetails.product}
            type="text"
            id="product"
            name="product"
            onChange={(e) => {
              props.productChangeHandler(props.itemDetails.id, e);
            }}
          />
        </div>
        <div className="column">
          <label htmlFor="variant">Variant</label>
          <input
            autoComplete="off"
            value={props.itemDetails.variant}
            type="text"
            id="variant"
            name="variant"
            onChange={(e) => {
              props.productChangeHandler(props.itemDetails.id, e);
            }}
          />
        </div>
        <div className="column">
          <label htmlFor="quantity">Quantity</label>
          <input
            autoComplete="off"
            value={props.itemDetails.quantity}
            type="text"
            id="quantity"
            name="quantity"
            onChange={(e) => {
              props.productChangeHandler(props.itemDetails.id, e);
            }}
          />
        </div>
        <div className="column">
          <label htmlFor="qty-price">Price pre Qty</label>
          <input
            autoComplete="off"
            value={props.itemDetails.pricePerQty}
            type="text"
            id="qty-price"
            name="pricePerQty"
            onChange={(e) => {
              props.productChangeHandler(props.itemDetails.id, e);
            }}
          />
        </div>
        <div className="column">
          <label htmlFor="hsn">HSN Code</label>
          <input
            autoComplete="off"
            value={props.itemDetails.hsnCode}
            type="text"
            id="hsn"
            name="hsnCode"
            onChange={(e) => {
              props.productChangeHandler(props.itemDetails.id, e);
            }}
          />
        </div>
        <div className="column">
          <label htmlFor="total">Total</label>
          <input
            autoComplete="off"
            value={props.itemDetails.total}
            type="text"
            id="total"
            name="total"
            onChange={(e) => {
              props.productChangeHandler(props.itemDetails.id, e);
            }}
          />
        </div>
        <div
          className="column delete-button"
          onClick={() => props.deleteItemHandler(props.itemDetails.id)}
        >
          {props.itemsSize.length > 1 && (
            <DeleteOutlineIcon sx={{ fontSize: 28 }} />
          )}
        </div>
      </div>
    </div>
  );
}
