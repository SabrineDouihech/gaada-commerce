import React, {useState} from 'react';
import axios from 'axios';


const Login=(props)=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedin, setLoggedin] = useState(false);
    
    const login = ()=>{
        
        axios.get('/login', {email, password}).then((response)=>{
            console.log(response);
            if (response.data.length > 0) {
            //   props.updateView();
              console.log('logged in');
            }
          })
            .catch((error)=>{
              if (error) { alert('Wrong password/username !'); } 
            });
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
                onClick={(e)=>{
                    e.preventDefault();
                    login()
                }}
                onClick={props.updateView}
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