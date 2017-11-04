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
    type: Sequelize.INTEGER
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 100
  },
  category: {
    type: Sequelize.STRING
  }
})

Product.prototype.purchase = function(num) {
  this.setDataValue('inventory', this.inventory - num);
}

Product.prototype.return = function(num) {
  this.setDataValue('inventory', this.inventory + num);
}

module.exports = Product;
