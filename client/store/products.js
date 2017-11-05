import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'

/**
 * INITIAL STATE
 */
const products = [];

/**
 * ACTION CREATORS
 */
const allProducts = products => ({type: GET_PRODUCTS, products})


/**
 * THUNK CREATORS
 */
export const getProducts = () =>(dispatch) => {
  axios.get('/api/products')
    .then(res => dispatch(allProducts(res.data)))
    .catch(err => console.error('Getting products unsuccessful', err))
};

/**
 * REDUCER
 */

export default function (state = products, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
