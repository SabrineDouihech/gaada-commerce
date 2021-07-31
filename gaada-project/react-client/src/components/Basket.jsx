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
      <div>
        {/* {console.log(props.basket)} */}
        {this.props.basket.map((elm, i) => (
          <div key={i}>
            <h4>{elm.itemName}</h4>

            <h4>{elm.price}</h4>
            <button onClick={() => this.delete()}>XX</button>
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


