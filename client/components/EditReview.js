import React from 'react';
import {Link} from 'react-router-dom';

const EditReviews = (props) => {

  const {handleEdit, reviews} = props

  return (
    <div>
    </div>
  )
}

const mapState = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleEdit (id) {
        dispatch(editReview(id))
    }
  }
}

export const EditReviewContainer = connect(mapState, mapDispatch)(EditReview);
