const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('Cart', 'Created', 'Processing', 'Cancelled', 'Completed'),
    defaultValue: 'Cart'
  },
})

module.exports = Order;
