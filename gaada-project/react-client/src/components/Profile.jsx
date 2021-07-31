import React from "react";
import Create from "./Create.jsx";
import Basket from "./Basket.jsx";
import Field from "./Field.jsx";



export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span id="disconnectbtn" style={{cursor:"pointer"}} onClick={this.props.disconnect}> Disconnect </span>
          <h5>{this.props.user.username}</h5  >
          <h6>{this.props.user.email}</h6>
        </div>
        <div>
          <Field/>
        </div>
      <div>
        <Create/>
      </div>

<div className="card">
  {
    this.props.items.map((elm,i)=>(
      <div className="card-itemDetails" key={i}>
      <img className="card-image" src={elm.imageUrl} alt="item image" />

      <h3>{elm.itemName}</h3>
          <h5>{elm.itemType}</h5>
          <h5>{elm.price}</h5>
          <h5>{elm.itemDescription}</h5>
          <h5>{elm.quantity}</h5>
          </div>
    ))
  }
</div>
      </div>
    );
  }
}

