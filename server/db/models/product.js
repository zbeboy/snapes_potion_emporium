const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.FLOAT
  },
  inStock: {
    type: Sequelize.BOOLEAN,
    set(inventory) {
      this.setDataValue('inStock', inventory > 0)
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 100
  },
  category: {
    type: Sequelize.STRING
  }
})

// Product.afterUpdate('setInStock', (user,options) => {
//   console.log('I be running', user.inventory > 0)
//   // user.setDataValue('inStock', user.inventory > 0);
//   user.inStock = user.inventory > 0;
// })

// Product.prototype.setInStock = function() {
//   this.setDataValue('inStock', this.inventory > 0);
// }

Product.prototype.purchase = function(num) {
  this.setDataValue('inventory', this.inventory - num);
}

Product.prototype.return = function(num) {
  this.setDataValue('inventory', this.inventory + num);
}


module.exports = Product;
