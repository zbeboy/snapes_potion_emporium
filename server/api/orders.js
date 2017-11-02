const router = require('express').Router()
const { Order, Order_Product, Product } = require('../db/models')
module.exports = router

router.get('/:id', (req, res, next) => {
  const orderId = Number(req.params.id);
  Order.findOne({
    include: [ Product, Order_Product ],
    where: {
      id: orderId
    }
  })
  .then(order => res.json(order))
  .catch(next)
})

router.post('/cart', (req, res, next) => {
  //post cart items on state to database if user is logged in or admin on session expire 
  //cart items on state is an array 
  const userStatus = req.body.user.status;
  const products = req.body.products;

  if (userStatus === 'authorizedUser' || userStatus === 'admin'){
    Order.create()
      .then(order => products.forEach(product => {
        Product.update(
          { orderId: order.id }, 
            { where: 
              { id: product.id }
            }
          )
        })
      )
    }
})

router.post('/created', (req, res, next) => {
  //post products to order_products with a fixed price 
  const orderId = req.body.orderId;
  const products = req.body.products;
  const userStatus = req.body.userStatus;

  if (userStatus === 'authorizedUser' || userStatus === 'admin'){
    Order.findById(orderId)
      .then(order => {
        return order.update({ status: 'Created' })
      })
      .then(order => { products.forEach(product => {
          OrderProduct.created({ fixedPrice: product.price })
        })
      })
      .catch(next)
  } else if (userStatus === 'friend'){
      Order.create({ status: 'Created' })
        .then(order => { products.forEach(product => {
            OrderProduct.created({ fixedPrice: product.price })
          })
        })
        .catch(next)
    }
})

router.put('/:id', (req, res, next) => {
  let orderId = Number(req.params.id);
  Order.findById(orderId)
    .then(order => {
      order.update(req.body)
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  let orderId = Number(req.params.id);
  Order.findById(orderId)
    .then(product => {
      order.destroy()
    })
    .catch(next)
})

router.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('There was an Express error.')
})