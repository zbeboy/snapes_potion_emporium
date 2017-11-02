const Sequelize = require('sequelize')
const db = require('../db')

const Order_Product = db.define('order_product', {
  fixedPrice: {
    type: Sequelize.INTEGER
  },
  productId: Sequelize.INTEGER,
  orderId: Sequelize.INTEGER
})

module.exports = Order_Product;