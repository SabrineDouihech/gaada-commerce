import React from "react";

const ItemDetails = (props) => {
  return (
    <div className="card">

      <img calssname="card-image" src={props.item.imageUrl} alt="item image" />
      
      <div className="card-itemDetails">
          <h3>{props.item.itemName}</h3>
          <h5>{props.item.itemType}</h5>
          <h5>{props.item.price}</h5>
          <h5>{props.item.itemDescription}</h5>
          <h5>{props.item.quantity}</h5>
      </div>
    </div>
  );
};

export default ItemDetails;
