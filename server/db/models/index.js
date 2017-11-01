const Product = require('./product');
const Order = require('./order');
const Order_Product = require('./order_product');
const Review = require('./review');
const User = require('./user');

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */


////////////////////////////

//Order
Order.belongsTo(User);
Order.hasMany(Product);

//Product
Product.hasMany(Review);
Product.belongsToMany(Order, { through: 'order_product' });

//Review
Review.belongsTo(User);
Review.belongsTo(Product);

//Users
User.hasMany(Review);
User.hasMany(Order);

/////////////////////////////

module.exports = {
  Product,
  Order,
  Order_Product,
  Review,
  User
}
