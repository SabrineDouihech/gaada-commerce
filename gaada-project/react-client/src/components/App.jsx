import React from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";
import Field from "./Field.jsx";
import Basket from "./Basket.jsx";
import axios from "axios";


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      users: [],
      view: "home",
      user:{},
      basket: [],
      serachType:"",
      };
    this.changeView = this.changeView.bind(this);
    this.getItems = this.getItems.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }


  handleChange(e){
    this.setState({searchType: e.target.value})
  }

  componentDidMount() {
    this.getItems();
    this.getUsers()
  }

  getUsers () {
    axios.get('/users').then(res =>{
      this.setState({users : res.data})
      console.log(this.state.users , "users") 
    }).catch(err=>{
      console.log(err);
    })
    
  }

  getItems() {
    axios.get("/items").then((res) => {
      this.setState({ items: res.data });
      console.log(this.state.items, "items");
    }).catch(err=>{
      console.log(err);
    })
  }


  changeView(option) {
      this.setState({
        view: option,
      });
  }

// filtered(){
  
// }
  

  renderView() {

    const filteredItems = this.state.items.filter((item)=>{
      return item.itemType.includes(this.state.searchType);
    })
//console.log(filteredItems)
    const { view, items, users, basket, user } = this.state;

    if (view === "home") {
      return <Home filteredItems={filteredItems} basket={basket} changeView={this.changeView} />;
    } else if (view === "login") {
      return <Login users={users} changeView={()=>{this.changeView('profile')}} />;
    } else if (view === "sign up") {
      return <Signup handleChange={()=>{this.changeView('field')}}  />;
    } else if (view === "field"){
      return <Field  changeView={this.changeView} user={user}/>;
    } else if (view === "profil"){
      return <Profile users={users} items={items} />
    } else{
     return <Basket basket={basket}/>
    }
  }

 

  render() {
    return (
      <div>
        <div className="nav">
          <span 
          className="logo"
          style={{cursor:"pointer"}}
          onClick={() => this.changeView("home")}> Ga3da commerce </span>
            <span>
              <input type="text" placeholder="Search..." onChange={this.handleChange} value={this.state.searchType}/>
              
            </span>
          <span
            className={
              this.state.view === "home" ? "nav-selected" : "nav-unselected"
            }
            style={{cursor:"pointer"}}
            onClick={() => this.changeView("home")}>  Home </span>
          <span
            className="nav-unselected"
            style={{cursor:"pointer"}}
            onClick={() => this.changeView("login")}> Login </span>
          <span
            className="nav-unselected"
            style={{cursor:"pointer"}}
            onClick={() => this.changeView("sign up")}> Sign up </span>
            </div>
        <div>
          {this.renderView()}
        </div>
      </div>
    );
  }
}
