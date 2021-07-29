import React, {useState} from 'react';
import axios from 'axios';


const Login=(props)=>{
    console.log(props, "props login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedin, setLoggedin] = useState(false);
    
    const login = ()=>{
        axios.get('/login', {email, password}).then(result=>{
            console.log(result.data);
            // if (result.data.length > 0) {
            // props.updateView();
            // } else alert("wrong username/password !")
            }).catch(err=>{
            console.log(err);
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
                type='submit'
                onClick={login}
                > Login </button>
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