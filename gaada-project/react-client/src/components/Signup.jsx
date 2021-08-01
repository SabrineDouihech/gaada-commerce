import React, {useState} from 'react';
import axios from 'axios';

const Signup=(props)=>{
// console.log(props, 'props signup');
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedin, setLoggedin] = useState(false);


    const signup = (e)=>{
        e.preventDefault();
        axios
          .post("/signup", {
            username,
            password,
            email,
            loggedin
          })
          .then(() => {
              props.changeView('home')
              setLoggedin(true);
          });
    }

    return(
        <div>
            <form id="SignUpForm" onSubmit={signup}>
                <h3>Sign Up</h3>
                <br />
                <label id="nameLabel"> Name </label> <br />
                <input id="nameInput" type="name" placeholder="enter your name"
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                />
                <br />
                <label id="emailLabel"> Email </label> <br />
                <input id="emailInput" type="text" placeholder="email@example.com"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                />
                <br />
                <label id="passwordLabel"> Password </label> <br />
                <input id="passwordInput" type="password" placeholder="enter your password"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                />
                <br />
                <br />
                <button id="signUpBtn" type='submit'> Sign Up </button>
                <button onClick={()=>{props.changeView('home')}} >Exit</button>
            </form>
        </div>
    )
}

export default Signup