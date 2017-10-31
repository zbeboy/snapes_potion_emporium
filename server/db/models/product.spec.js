//test specs

//add new product
//name is required
//inStock should update
//test default value of inventory AND specified value
//test purchase function will subtract from inventory

const {expect} = require('chai')
const db = require('../index')
// const Product = db.model('product')
const Product = require('./product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('creating instance', () => {
    // describe('name is required', () => {
    //   let polyjuicePotion;

    //   beforeEach(() => {
    //     return Product.create({
    //       name: undefined
    //     })
    //     .then(potion => {
    //       polyjuicePotion = potion;
    //     })

    //   })

    //   it('expects an error when name is not given', () => {
    //     expect(polyjuicePotion).to.be.an('error');
    //   })

    // }) // FIGURE OUT LATER!

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

      xit('changes in stock to false if inventory becomes 0', () => {
        felixFelicis.update({
          inventory: 0
        })
        .then(potion => {
          potion.set('inStock', potion.inventory)
          felixFelicis = potion;
        })
        expect(felixFelicis.inStock).to.be.equal(false)
      }) // worry about this later
    }) // end describe('inStock')
  }) // end describe('instanceMethods')


}) // end describe('Product model')
