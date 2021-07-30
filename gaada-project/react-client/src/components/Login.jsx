import React, {useState} from 'react';
import Profile from './Profile.jsx';

const Login=(props)=>{
    // console.log(props.users, "users login");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
  

    const login = (e)=>{
        e.preventDefault();
     props.users.map(ele => {
         if(ele.password === password && ele.email === email) {
             console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
         } else {console.log("wrong password/email !")}
     })
    }

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