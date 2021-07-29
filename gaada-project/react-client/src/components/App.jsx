import React from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";
import axios from "axios";

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      users: [],
      view: "home",
    };
    this.getItems = this.getItems.bind(this);
    this.getUsers = this.getUsers.bind(this);
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

  renderView() {
    const { view, items, users } = this.state;

    if (view === "home") {
      return <Home items={items}/>;
    } else if (view === "login") {
      return <Login items={items} users={users} updateView={()=> this.changeView('profile')} />;
    } else if (view === "sign up") {
      return <Signup items={items} users={users} updateView={()=> this.changeView('profile')} />;
    } else if (view === 'profile') {
      return <Profile items={items} users={users} />
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
        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}
