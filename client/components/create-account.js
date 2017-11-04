import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

const CreateAccount = () => {

  return (
    <div>
      Create Account
      <form>
          <label className="name">
           Name:
          <input className="name-field" />
          </label>
          <label>
           Email:
          <input className="email-field" />
          </label>
          <label>
           Password:
          <input className="password-field" />
          </label>
          <label>
           Confirm Password:
          <input className="confirm-password-field" />
          </label>
        <button>Create Account</button>
      </form>

      <p>Have an account? Return to <Link to="login"><span>Login Page</span></Link></p>


    </div>
  )

}

export default CreateAccount;
