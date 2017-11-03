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

  const userId = req.body.userId;
  const products = req.body.products;

  Order.create({ userId })
  .then(order => { 
    products.forEach(product => {
      return order.addProduct(product, { productId: product })
    })
    res.json(order)
  })
  .catch(next)
})

router.post('/created', (req, res, next) => {
  //maybe /:orderId/created and use req.params for the orderId
  const orderId = req.body.orderId;

  Order.findById(orderId)
    .then(order => {
      // let prices = order.getProducts().map(product => {id: product.id, product.price});
      order.getProducts()
      .then(products => products.forEach(product => {
        return Order_Product.findOne({
          where: {
            orderId: orderId,
            productId: product.id
          }
        })
        .then(order => order.update({
          fixedPrice: product.price
        }))
      }))

      return order.update({ status: 'Created' });
    })
    .then(order => res.json(order))
    .catch(next);
})

router.put('/:id', (req, res, next) => {
  let orderId = Number(req.params.id);
  Order.findById(orderId)
    .then(order => {
      return order.update(req.body)
    })
    .then(order => res.json(order))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  let orderId = Number(req.params.id);
  Order.findById(orderId)
    .then(order => {
      return order.destroy()
    })
    .then(order => res.json(`Order ${orderId} has been deleted.`))
    .catch(next)
})

router.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('There was an Express error.')
})