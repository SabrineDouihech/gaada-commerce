import React from "react";
import Create from "./Create.jsx";



export default class Profile extends React.Component {
  render() {
    return (
      <div>
        {console.log('--------------------profile',this.props.users[0])}
        <div><img src={this.props.users[0].image}/>
        <h5>{this.props.users[0].username}</h5>
        <h6>{this.props.users[0].email}</h6></div>
        <div>
        <Create/>
</div>

<div className="card">
  {
    this.props.items.map((elm,i)=>(
      <div className="card-itemDetails" key={i}>
      <img className="card-image" src={elm.imageUrl} alt="item image" />

      <h3>{elm.itemName}</h3>
          <h5>{elm.itemType}</h5>
          <h5>{elm.price}</h5>
          <h5>{elm.itemDescription}</h5>
          <h5>{elm.quantity}</h5>
          </div>
    ))
  }
</div>
      </div>
    );
  }
}



























// <Container>
//           <Row>
//             <Col xs={3} md={2}>
//               <Image
//                 src="https://banner2.cleanpng.com/20180615/zgt/kisspng-bootstrap-logo-css3-butta-5b2353942780f2.0412430015290418121618.jpg"
//                 roundedCircle
//                 width={100}
//                 height={120}
//                 alt="100x90"
//               />
//             </Col>
//           </Row>
//           <h4>Name : </h4>
//         </Container>
//         <div>
//             {
//                 this.props.data.map((item,i)=>(
//           <Card style={{ width: "18rem" }} key={i}>
//             <Card.Img variant="top" src={item.imageUrl} />
//             <Card.Body>
//               <Card.Title>{item.itemName}</Card.Title>
//               <Card.Text>
//                 {item.itemDescription}
//               </Card.Text>
//               <Card.Text>
//                 {item.quantity}
//               </Card.Text>
//               <Card.Text>
//                 {item.price}
//               </Card.Text>
//               {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//           </Card>
//             ))
//         }
//         </div>