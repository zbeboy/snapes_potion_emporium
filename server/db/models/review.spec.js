/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Review = db.model('review')

describe('Review model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('schema test', () => {
    describe('', () => {
      let newReview

      beforeEach(() => {
        return Review.create({
          rating: '3',
          review: 'This product is not even good!'
        })
          .then(review => {
            newReview = review
          })
      })

      it('returns correct rating', () => {
        expect(newReview.rating).to.be.equal('3')
      })
      it('returns correct review', () => {
        expect(newReview.review).to.be.equal('This product is not even good!')
      })
    })
  })
})
