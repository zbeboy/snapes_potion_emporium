const Sequelize = require('sequelize')
const db = require('../db')

const Order_Product = db.define('order_product', {
  fixedPrice: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Order_Product;