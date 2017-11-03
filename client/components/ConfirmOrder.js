import React from 'react';
import {Link} from 'react-router-dom';

export const ConfirmOrder = (props) => {

  return (
    <div>
        <span>Confirm Order</span>
        <div>Thank you for your purchase!</div>
        <Link to={`/invoice/${this.props.match.params.orderId}`}></Link>
    </div>
  )
}

// const mapState = (state) => {
//   return {
//     reviews: state.reviews
//   }
// }

// const mapDispatch = (dispatch) => {
//   return {
//     handleDelete (id) {
//         dispatch(deleteReview(id))
//     }
//   }
// }

// export const ConfirmOrderContainer = connect(mapState, mapDispatch)(ConfirmOrder);
