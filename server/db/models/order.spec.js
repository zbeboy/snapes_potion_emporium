/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('has a schema definition', () => {
      let newOrder

      beforeEach(() => {
        return Order.create({
          status: 'Created'
        })
          .then(order => {
            newOrder = order
          })
      })
      
      it('returns correct status', () => {
        expect(newOrder.status).to.be.equal('Created');
      })
    })
}) // end describe('Order model')
