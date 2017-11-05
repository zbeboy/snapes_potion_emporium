import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'

const AllProducts = (props) => {
  const products = props.products;

  const calculateRating = (reviewsArray) => {
    let arrayOfRatings = reviewsArray.map((review) => {
      return review.rating
    }); 
    let ratingsTotal = arrayOfRatings.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }); 
    let ratingsAverage = ratingsTotal / arrayOfRatings.length; 
    return ratingsAverage; 
  }

  const getCategories = (products) => {
    let productCategories = products.map(product=>{
      return product.category
    })
    
    let uniqueCategories = [...new Set(productCategories)];
    return uniqueCategories;
    console.log(uniqueCategories)
  }

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
          { this.getCategories(products).map(category => {
              return ( 
                <div key={category}>
                  <Link to={`categories/${ category.id }` }>
                    <div >{ category }</div>
                  </Link>
                </div>
              )
            }) 
          }
        </div>
      </div>
    </div>
  )
}
  
const mapState = (state) => {
  return {
    products: state.products
  }
}

export default withRouter(connect(mapState, mapDispatch)(AllProducts));