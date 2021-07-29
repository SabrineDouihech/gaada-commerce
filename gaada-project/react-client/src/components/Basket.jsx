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
    //  this.props.basket
    // var add = (arr) =>{
    //     var res = 0
    //     for(var i =0; i<arr.length;i++){
    //       res+=arr[i].price
    //     }
    //     return res
    //     }
    return (
      <div>
        {/* {console.log(props.basket)} */}
        {this.props.basket.map((elm, i) => (
          <div key={i}>
            <h4>{elm.itemName}</h4>

            <h4>{elm.price}</h4>
            <button onClick={() => this.delete(elm._id)}>XX</button>
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

// import React from 'react';
// import axios from 'axios';
// // import Card from 'react-bootstrap/Card'

// export default class Basket extends React.Component {
// constructor(){
//     super()
//    this.delete = this.delete.bind(this)
// }

// delete(id){
// axios.delete(`/delete/${id}`)
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
// }

//     render(){
//         return(
//             <div>
//                 {
//                     this.props.basket.map((item,i)=>(
//                         <Card style={{ width: "18rem" }} key={i}>
//                         <Card.Img variant="top" src={item.imageUrl} />
//                         <Card.Body>
//                         <Card.Text>
//                             {item.itemName}
//                           </Card.Text>
//                           <Card.Text>
//                             {item.price}
//                           </Card.Text>
//                           <Button variant="primary" onClick={()=>this.delete()}>XXX</Button>
//                         </Card.Body>
//                       </Card>
//                     ))
//                 }
//             </div>
//         )
//     }
// }
