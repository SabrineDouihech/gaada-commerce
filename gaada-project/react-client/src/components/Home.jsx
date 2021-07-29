import React from "react";
import ItemDetails from "./ItemDetails.jsx";

class Home extends React.Component  {


  render(){
  return (
    <div className="container">
      {/* {console.log('------------',this.props.items)} */}
      {this.props.items.map((item, index) => (
        <ItemDetails item={item} key={index} />
      ))}
    </div>
  );
    }
};
export default Home;
