const router = require('express').Router()
const { Product, Review } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Product.findAll({ include: { all: true }})
    .then(products => res.json(products))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  const productId = Number(req.params.id);
  Product.findOne({
    include: [ Review ],
    where: {
      id: productId
    }
  })
    .then(product => res.json(product))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  let productId = Number(req.params.id);
  Product.findById(productId)
    .then(product => {
      return product.update(req.body)
    })
    .then(updatedProduct => res.json(updatedProduct))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  let productId = Number(req.params.id);
  Product.findById(productId)
    .then(product => {
      product.destroy()
    })
    .catch(next)
})

router.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('There was an Express error.')
})