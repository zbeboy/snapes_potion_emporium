const User = require('./user');
const Product = require('./product');
const Cart = require('./cart');
const Order = require('./order');
const Review = require('./review');

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

//Users
User.hasMany(Review);
User.hasMany(Order);

Order.belongsTo(User);

module.exports = {
  User,
  Product,
  Cart
  Order,
  Review
}
