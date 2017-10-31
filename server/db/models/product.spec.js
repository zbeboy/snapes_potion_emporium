//test specs

//add new product
//name is required
//inStock should update
//test default value of inventory AND specified value
//test purchase function will subtract from inventory

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
    describe('inStock', () => {
      let felixFelicis;

      beforeEach(() => {
        return Product.create({
          name: 'Felix Felicis',
          description: 'A potion for luck'
        })
          .then(potion => {
            potion.set('inStock', potion.inventory)
            felixFelicis = potion
          })
      })

      it('sets product to in stock if there is inventory', () => {
        expect(felixFelicis.inStock).to.be.equal(true)
      })

    }) // end describe('inStock')
  }) // end describe('instanceMethods')


}) // end describe('Product model')
