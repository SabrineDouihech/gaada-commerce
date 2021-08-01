import axios from 'axios';
import React, {useState} from 'react';
import Profile from './Profile.jsx';

const Login=(props)=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

   

    const login = (e)=>{
        // e.preventDefault();
        axios.post('/login', {email, password})
        .then(() => {
            props.changeView('field')
        }).catch(err => {
            alert( "wrong pasword/username!");
        })
    }


    return(
        <div>
            <form id="loginForm" onSubmit={()=>{
                login();
                props.changeView
            }}>
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
                <button id="loginBtn" type="submit"> Login </button>
                <button onClick={()=>{props.changeView('home')}} >Exit</button>
                <br />
                <br />
                <h6>forgot password? </h6>
                <br />
                <h6>Dont have an account ? </h6> <h6 style={{cursor:"pointer"}} onClick={()=>{props.changeView('sign up')}}>Register here.</h6>
            </form>
        </div>
    )
}

export default Login