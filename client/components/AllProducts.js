import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllProducts extends React.Component {
  constructor(){
    super()
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    axios.get('/api/products')
      .then(res => res.data)
      .then(products => { 
        console.log(products)
        this.setState({ products })})
      .catch(console.error())
  }

  calculateRating(reviewsArray){
    let arrayOfRatings = reviewsArray.map((review)=>{
      return review.rating
    }); 
    let ratingsTotal = arrayOfRatings.reduce((accumulator, currentValue)=>{
      return accumulator + currentValue
    }); 
    let ratingsAverage = ratingsTotal / arrayOfRatings.length; 
    return ratingsAverage; 
  }

  getCategories(products){
    let productCategories = products.map(product=>{
      return product.category
    })
    
    let uniqueCategories = [...new Set(productCategories)]; 
    console.log(uniqueCategories)
  }
  
  render(){
    const products = this.state.products;
    console.log(this.state); 
    return (
      <div>

        <div className="single-product">
          { products.map(product => {
            return (
              <div key ={ product.id }>
                <div>
                  <Link to={`/products/${ product.id }`}>
                    <div><img src={`${ product.imageURL }`} alt="Potion's Product"/></div>
                  </Link>
                </div>

                <div>
                  <Link to={`/products/${ product.id }`}>
                    <div>{ product.name }</div>
                  </Link>
                </div>

                <span>
                  <Link to={`/reviews/${ product.id }`}>
                    <span>Rating: { this.calculateRating(product.reviews) } </span>
                    <span>| Reviews: { product.reviews.length }</span>
                  </Link>
                </span>

              <div>Price: ${ `${ product.price }.00` }</div>
              </div>
              )
          })}
        </div>

        <div className="category">
          <h2>Categories</h2>
          <div>
            {this.getCategories(products)}
          </div>
        </div>

      </div>
    )
  }
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
  
  // export const AllReviewsContainer = connect(mapState, mapDispatch)(AllReviews);