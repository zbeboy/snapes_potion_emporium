import React from 'react';
import {Link} from 'react-router-dom';

const AllReviews = (props) => {

  const {handleDelete, reviews} = props

  return (
    <div>
        <span>Reviews</span>
        {
            reviews.map(review => (
                <div key={review.id}>
                    <span>{reiew.rating}</span>
                    <span>{review.review}</span>
                    <Link to='/edit_review'>Edit</Link>
                    <button onClick={handleDelete(review.id)}>Delete</button>
                </div>
            ))
        }
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
    handleDelete (id) {
        dispatch(deleteReview(id))
    }
  }
}

export const AllReviewsContainer = connect(mapState, mapDispatch)(AllReviews);
