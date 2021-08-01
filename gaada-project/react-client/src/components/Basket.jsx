import React from "react";
import axios from "axios";

class Basket extends React.Component {
  constructor() {
    super();

    this.delete = this.delete.bind(this);
  }

  delete() {
    var arr = this.props.basket.shift()
    this.setState({
      basket : arr
    })
    location.reload();
  }

  render() {
    return (
      <div className="container">
        {this.props.basket.map((elm, i) => (
          <div key={i} className="card">
            <img className="card-image" src={elm.imageUrl} alt="item image" />

              <div className="card-itemDetails">
                <h4>{elm.itemName}</h4>
                <h4>{elm.itemType}</h4>
                <h4>{elm.itemDescription}</h4>
                <h4>{elm.price}</h4>
                <button onClick={() => this.delete(elm._id)}> Delete </button>
            </div>
          </div>
        ))}
        <div>
         
          <button id="foot" onClick={() => this.props.changeView("ticket")}>
            <button className="button-os">
              <a href="#">Get Your Ticket</a>
            </button>
          </button>
        </div>
      </div>
    );
  }
}

export default Basket;


