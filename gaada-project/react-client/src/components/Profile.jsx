import React from "react";
import Create from "./Create.jsx";
import Basket from "./Basket.jsx";
import Field from "./Field.jsx";



export default class Profile extends React.Component {
  render() {
    return (
      <div>
        {console.log('--------------------profile',this.props.users[0])}
        <img src={this.props.users[0].image}/>
        <h5>{this.props.users[0].name}</h5>
        <h6>{this.props.users[0].email}</h6>
        {/* <Field /> */}
        <Create/>
        {/* <Basket/> */}
      </div>
    );
  }
}

