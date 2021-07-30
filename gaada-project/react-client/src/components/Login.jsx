import React, {useState} from 'react';
import axios from 'axios';


const Login=(props)=>{
console.log(props, "props login");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = ()=>{
        axios.get('/login', {username, password}).then(result=>{
            if (result.data.length > 0) {
            props.updateView();
            console.log(`welcome ${username}`);
            } else alert("wrong username/password !")
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
                onChange={(e)=>{
                    setUsername(e.target.value)
                }} />
                <br />
                <label id="passwordLabel"> Password </label> <br />
                <input id="passwordInput" type="password" placeholder="enter your password"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} />
                <br />
                <button id="loginBtn" 
                type='submit'
                onClick={login}
                onClick={props.handleChange}
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