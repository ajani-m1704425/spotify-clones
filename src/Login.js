import React from 'react';
import "./Login.css";
import { loginUrl } from './Spotify';

function Login(props) {
    return (
        <div className='login'>
            <img className='spotifyLogo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Spotify Logo" />
            <a className='loginButton' href={loginUrl}>LOGIN TO SPOTIFY</a>
            
        </div>
    );
}

export default Login;