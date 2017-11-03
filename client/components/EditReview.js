import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditReview extends Component {

  constructor(props){
    super(props);
    this.state = {
        rating: 1,
        review: ''
    }
  }

  render(){
      const reviewId = this.props.match.params.reviewId;
      return (
        <div>
          <form onSubmit={this.props.editReviewSubmit(this.state)}>
            <select onChange={(e) => this.setState({rating: e.target.value})}>
              {
                [1,2,3,4,5].map((n, idx) => (
                  <option key={idx} value={n}>n</option>
                ))
              }
            </select>
            <label> Review:
                <textarea
                  value={this.state.review}
                  onChange={(e) => this.setState({review: e.target.value})}
                /> 
            </label>
          </form>
        </div>
      )
  }
}

const mapState = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatch = (dispatch) => {
  return {
    editReviewSubmit (newReview) {
        dispatch(editReviewSubmit(newReview))
    }
  }
}

export const EditReviewContainer = connect(mapState, mapDispatch)(EditReview);
