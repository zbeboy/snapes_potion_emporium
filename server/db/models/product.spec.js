//test specs

const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('creating instance', () => {

    describe('sets inventory', () => {
      let polyjuicePotion;

      beforeEach(() => {
        return Product.create({
          name: 'Polyjuice Potion'
        })
          .then(potion => {
            polyjuicePotion = potion;
          })
      })

      it ('sets default inventory as 100', () => {
        expect(polyjuicePotion.inventory).to.be.equal(100);
      })

      it('allows you to set inventory', () => {
        polyjuicePotion.inventory = 38;
        expect(polyjuicePotion.inventory).to.be.equal(38);
      })
    })

  })

  describe('instanceMethods', () => {
      
  }) // end describe('instanceMethods')


}) // end describe('Product model')
