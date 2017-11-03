import React from 'react';
import {Link} from 'react-router-dom';

const Invoice = (props) => {

  const {getAllProducts, products} = props

  return (
    <div>
        <span>Invoice</span>
    </div>
  )
}

const mapState = (state) => {
  return {
    products: state.products
  }
}

const mapDispatch = (dispatch) => {
  return {
    getAllProducts (orderId) {
        dispatch(getAllProducts(orderId))
    }
  }
}

export const InvoiceContainer = connect(mapState, mapDispatch)(Invoice);
