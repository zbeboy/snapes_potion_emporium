import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

const Login = () => {

  return (
    <div className="login-container">
      <h1>Login</h1>

      <div className="login-container-leftbox">
        <h3>login with</h3>


        <img src="https://www.htps.us/UserFiles/Servers/Server_791028/Templates/login-google.png" alt="google login" width="200px"/>
          <br/>
        <img src="https://dancourseuk.files.wordpress.com/2015/02/sign-in-facebook.png" width="200"/>
      </div>

      <div className="login-container-rightbox">
        <form>
          email
        </form>
      </div>
    </div>
  )

}

export default withRouter(connect(mapState, mapDispatch)(Login))
