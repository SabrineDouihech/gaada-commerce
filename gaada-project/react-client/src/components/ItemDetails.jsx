import React from "react";

class ItemDetails extends React.Component {
constructor(){
  super()
  
  this.insert = this.insert.bind(this)
}

insert(elm){
var arr = this.props.basket.push(elm)
this.setState({
  basket: arr
})
this.props.changeView('basket')

}

  render(){
  return (
    <div className="card">

      <img calssname="card-image" src={this.props.item.imageUrl} alt="item image" />
      
      <div className="card-itemDetails">
          <h3>{this.props.item.itemName}</h3>
          <h5>{this.props.item.itemType}</h5>
          <h5>{this.props.item.price}</h5>
          <h5>{this.props.item.itemDescription}</h5>
          <h5>{this.props.item.quantity}</h5>
          <button onClick={()=>this.insert(this.props.item)} >Buy it</button>
      </div>
    </div>
  );
  }
};

export default ItemDetails;
