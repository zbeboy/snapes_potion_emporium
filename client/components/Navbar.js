import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {

  const {handleClick, isLoggedIn, userName} = props

  return (
    <div>
      <span>Logo Will Go Here</span>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        {
          isLoggedIn
            ? <div>
              <span>Hello, {userName}</span>
              <Link to={`/user/:id/orders`}>My Orders</Link>
              <a href="#" onClick={handleClick}>Logout</a>
            </div>
            : <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
        }
      </nav>
    </div>
  )
}

export default Navbar;

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    userName: state.user.name
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}