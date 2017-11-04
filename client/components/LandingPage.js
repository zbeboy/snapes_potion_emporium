import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import axios from 'axios';

export default class LandingPage extends React.Component{
  constructor() {
    super()
    this.state= {
      featuredProduct : {}
    }
  }

  componentDidMount(){
this.getFeaturedProduct(1);
  }

  getFeaturedProduct(id){
    axios.get(`/api/products/${id}`)
    .then(res=>res.data)
    .then(featuredProduct=>this.setState({ featuredProduct }))
    .catch(console.error)
  }

    render() {
      let featuredProductImage = this.state.featuredProduct.imageURL;
      let featuredProductName = this.state.featuredProduct.name;
      return(
        <div className="landing-page-outer-div">
          <h1>Welcome to Snape's Potion Emporium</h1>
          <h2>Try our newest potion: </h2>

          <Link to={`/products/${this.state.featuredProduct.id}`}>
            <div className="featured-product">
              <h3>{featuredProductName}</h3>
              <div className="featured-product-image-left">
              <img src={featuredProductImage} />
              </div>
            </div>
          </Link>

        </div>
      )
    }
}

