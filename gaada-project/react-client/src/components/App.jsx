import React from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";
import Field from "./Field.jsx";
import Basket from "./Basket.jsx";
import Search from "./Search.jsx";  
import Ticket from "./Ticket.jsx"
import axios from "axios";

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      users: [],
      view: "home",
      user: null,
      basket: [],
      serachType:"",
      };
      this.loggedinUser = this.loggedinUser.bind(this);
      this.changeView = this.changeView.bind(this);
      this.getItems = this.getItems.bind(this);
      this.getUsers = this.getUsers.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.disconnect = this.disconnect.bind(this);
  }

  componentDidMount() {
    this.getItems();
    this.getUsers()
    this.loggedinUser()
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

  loggedinUser() {
    axios.get('/user/loggedin').then(result =>{
      this.setState({user : result.data})
      console.log(this.state.user, "actif user");
    })
  }

  disconnect() {
    axios.get('/user/disconnect').then(() =>{
      this.setState({user : null})
    }).then(() =>{
      this.changeView('home')
    })
  }

  changeView(option) {
      this.setState({
        view: option,
      });
  }

  handleChange(e){
    this.setState({searchType: e.target.value})
  }

  renderView() {

    const filteredItems = this.state.items.filter((item)=>{
      return item.itemType.includes(this.state.searchType);
    })
//console.log(filteredItems)
    const { view, items, users, basket, user } = this.state;

    if (view === "home") {
      return <Home changeView={this.changeView} items={items} />;
    } else if (view === "login") {
      return <Login changeView={this.changeView} />;
    } else if (view === "sign up") {
      return <Signup changeView={this.changeView} />;
    } else if (view === "field") {
      return <Field  changeView={this.changeView} user={user} />;
    } else if (view === "profile") {
      return <Profile changeView={this.changeView} user={user} items={items} disconnect={this.disconnect} />;
    } else if (view === "search") {
      return <Search changeView={this.changeView} filteredItems={filteredItems} basket={basket} />
    } else if (view === "basket") {
     return <Basket changeView={this.changeView} basket={basket} />
    } else {
      return <Ticket changeView={this.changeView} basket={this.state.basket} />
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
              <input onClick={() => this.changeView("search")} type="text" value="submit" placeholder="Search..." 
              onChange={this.handleChange} 
              value={this.state.searchType}/>
            </span>
            <span
            className={
              this.state.view === "home" ? "nav-selected" : "nav-unselected"
            }
            style={{cursor:"pointer"}}
            onClick={() => this.changeView("profile")}> Profile </span>
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
