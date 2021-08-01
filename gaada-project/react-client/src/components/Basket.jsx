import React from "react";
import axios from "axios";

class Basket extends React.Component {
  constructor() {
    super();

    this.delete = this.delete.bind(this);
  }

  delete(id) {
    axios.delete(`/items/${id}`).then((res) => {
      console.log(res);
      location.reload();
    });
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
          <div>
            <h3>Ko77 : </h3>
            {this.props.basket.reduce((acc, elm, i) => acc + elm.price, 0)}$
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;


