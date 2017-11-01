const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
    items: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed'),
        defaultValue: 'Created'
    }
});

module.exports = Order;