import React from "react";
import ItemDetails from "./ItemDetails.jsx";

class Home extends React.Component  {


  render(){
  return (
    <div className="container">
      {/* {console.log('------------',this.props.changeView)} */}
      {this.props.filteredItems.map((item, index) => (
        <ItemDetails item={item} key={index} changeView={this.props.changeView} basket={this.props.basket} />
      ))}
    </div>
  );
    }
};
export default Home;
