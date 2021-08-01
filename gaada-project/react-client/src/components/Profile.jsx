import React from "react";
import Create from "./Create.jsx";
import Field from "./Field.jsx";
import axios from "axios";



export default class Profile extends React.Component {
  constructor(props){
    super(props)
    this.delete = this.delete.bind(this)
  }
  
  delete(id){
    axios.delete(`/items/${id}`)
    .then((res)=>{
      console.log(res)
    })
  }

  

  render() {
    return (
      <div>
        <div>
          {/* {console.log(this.props.user.image)} */}
          <span id="disconnectbtn" style={{cursor:"pointer"}} onClick={this.props.disconnect}> Disconnect </span>
          <img className="card-image2" src={this.props.user.image}/>
          <h5>{this.props.user.username}</h5  >
          <h6>{this.props.user.email}</h6>
        </div>
        <br />
        <div>
          <Field/>
        </div>
        <br />
        <div>
        <Create/>
      </div>

      <div className="card">
  {
    this.props.items.map((elm,i)=>(
      <div className="container1" key={i}>
          <div className="card1">
    <div className="box1">
      <div className="content1">
      <img className="card-image1" src={elm.imageUrl} alt="item image" />

      <h3>{elm.itemName}</h3>
          <button onClick={()=>this.delete(elm._id)}>Delete </button>
          </div>
          </div>
          </div>
          </div>
    ))
  }
</div>
      </div>
    );
  }
}

