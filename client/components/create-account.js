import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

const CreateAccount = () => {

  return (
    <div className="login-container">
      <h1>Create Account</h1>

      <div className="login-container-leftbox">
        <h3>login with</h3>


        <img src="https://www.htps.us/UserFiles/Servers/Server_791028/Templates/login-google.png" alt="google login" width="200px"/>
          <br/>
        <img src="https://dancourseuk.files.wordpress.com/2015/02/sign-in-facebook.png" width="200"/>
      </div>

      <h3> -OR- </h3>

      <div className="login-container-rightbox">
        <form>
          <label>
            email: <br/>
            <input type="text"/>
          </label>
          <label>
            password: <br/>
            <input type="text"/>
          </label>
          <button type="button">Submit</button>
        </form>
        </div>

        <div className="create-new-user-link-button">
        <button type="button">Create New Account</button>
        </div>

    </div>
  )

}

export default CreateAccount;