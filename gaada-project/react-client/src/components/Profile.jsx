import React from "react";
import Create from "./Create.jsx";
import Basket from "./Basket.jsx";
import Field from "./Field.jsx";



export default class Profile extends React.Component {
  render() {
    return (
      <div>
        {console.log('--------------------profile',this.props.users[0])}
        <div><img src={this.props.users[0].image}/>
        <h5>{this.props.users[0].username}</h5>
        <h6>{this.props.users[0].email}</h6></div>
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

