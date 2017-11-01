import React from 'react';
import { Router } from 'react-router';

export default function Login() {

  return (
    <div className="login-container">
      <h1>Login</h1>

      <div className="login-container-leftbox">
        <h3>login with</h3>
        <img src="https://www.htps.us/UserFiles/Servers/Server_791028/Templates/login-google.png" className="google-login-button">

        <img src="http://www.freeiconspng.com/uploads/facebook-login-button-png-11.png" className="facebook-login-button">

      </div>
    </div>
  )

}
