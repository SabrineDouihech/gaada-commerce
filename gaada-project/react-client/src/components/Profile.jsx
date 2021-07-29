import React from "react";
import Create from "./Create.jsx";



export default class Profile extends React.Component {
  render() {
    return (
      <div>
        {console.log('--------------------profile',this.props.users[0])}
        <img src={this.props.users[0].image}/>
        <h5>{this.props.users[0].name}</h5>
        <h6>{this.props.users[0].email}</h6>
        <Create/>
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