// import React from "react";
// import {
//   Button,
//   Navbar,
//   Nav,
//   NavDropdown,
//   Form,
//   FormControl
// } from "react-bootstrap";
// import axios from "axios";

// // import { Link } from 'react-router-dom'


// class  Navbare extends React.Component{
//   constructor(props){
//     super(props);
//     // this.state = {
//     //   //serachType : "",
//     // }
//     //this.handleChange = this.handleChange.bind(this)
//   }

//   // handleChange (e){
//   //   this.setState({searchType: e.target.value})
//   // }

//   getType(type){
//     axios.get(`/Items/type${type}`).then((data)=>{
//       console.log("success", data)
//     })
//   }

//   componentDidMount(){
//     this.getType();
//   }

//   // console.log(props);
//   render(){

//     // var filteredItems = this.state.items.filter((item)=>{
//     //    return item.type.includes(this.state.searchType)
//     //   })

//     return (
      
//       <div>
//         {/* {console.log(props)} */}
//         <Navbar bg="light" expand="lg">
//           <Navbar.Brand >Ga3da Commerce</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="mr-auto my-2 my-lg-0"
//               style={{ maxHeight: "100px" }}
//               navbarScroll
//             >
//               <Nav.Link onClick={()=> props.handleChange('login')}>Login</Nav.Link>
//               <Nav.Link onClick={()=>props.handleChange('sign up')}> Signup </Nav.Link>
//               <NavDropdown title="Categories" id="navbarScrollingDropdown">
//                 <NavDropdown.Item >Action</NavDropdown.Item>
//                 <NavDropdown.Item >
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">
//                   Something else here
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="/profile">Profil</Nav.Link>
              
//             </Nav>

//             <Form className="d-flex">
//               <FormControl
//                 type="search"
//                 placeholder="Search"
//                 className="mr-2"
//                 aria-label="Search"
//                 //onChange={this.handleChange}
//                 //value={this.state.searchItem}
//               />
//               <Button variant="outline-success" onClick={()=>{this.getType(this.props.item.itemType)}}>Search</Button>
//               <Nav.Link onClick={()=>props.handleChange('login')}>Basket</Nav.Link>
//             </Form>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }
