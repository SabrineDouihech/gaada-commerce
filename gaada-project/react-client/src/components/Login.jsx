import axios from 'axios';
import React, {useState} from 'react';
import Profile from './Profile.jsx';

const Login=(props)=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
  

    const login = (e)=>{
        e.preventDefault();
        axios.post('/login',{email, password})
        .then(response => {
            setUser(response.data)
            // return <Profile/>
            props.changeView
        }).catch(err => {
            console.log(err);
        })
    }
    console.log( user , "user data");
    //  props.users.map(ele => {
    //      if(ele.password === password && ele.email === email) {
    //          console.log("correct password");
    //      } else console.log("wrong password")
    //  })

    return(
        <div>
            <form id="loginForm" action="login">
                <h3>Login</h3>
                <br />
                <label id="emailLabel"> Email </label> <br />
                <input id="emailInput" type="text" placeholder="email@example.com" 
                onChange={(e)=>{ setEmail(e.target.value)}} />
                <br />
                <label id="passwordLabel"> Password </label> <br />
                <input id="passwordInput" type="password" placeholder="enter your password"
                onChange={(e)=>{ setPassword(e.target.value)}} />
                <br />
                <button id="loginBtn" 
                onClick={login}
                // onClick={()=>{ return <Profile />}}
                > Login </button>
                <button onClick={props.goBack} >Exit</button>
                <br />
                <br />
                <h6>forgot password? </h6>
                <br />
                <h6>Dont have an account ? Register here.</h6>
            </form>
        </div>
    )
}

export default Login