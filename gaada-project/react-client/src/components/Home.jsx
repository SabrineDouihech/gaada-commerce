import React from "react";
import ItemDetails from "./ItemDetails.jsx";

class Home extends React.Component  {


  render(){
  return (
    <div className="container">
      {this.props.items.map((item, key)=>(
        <div key={key}>
        <img src={item.imageUrl} />
        <h4> {item.itemName} </h4>
        <h5> {item.itemType} </h5>
        <h5> {item.price} </h5>
        <h5> {item.quantity} </h5>
        </div>)
      )}
      <button onClick={() =>this.props.changeView('home')} > Exit </button>
    </div>
  );
    }
};
export default Home;
