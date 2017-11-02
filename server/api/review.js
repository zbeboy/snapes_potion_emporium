const router = require('express').Router()
const {Review} = require('../db/models/review');
module.exports = router


router.get('/', (req, res, next) => {
  Review.findAll()
  .then(reviews => res.json(reviews))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  let id = Number(req.params.id);
  Review.findOne({
    where:{
      id: id
    }
  })
  .then(review => res.json(review))
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  Review.findOne({
    where: {
      id : id
    }
  })
  .then(review => review.update(req.body))
  .then(updatedReview => res.json(updatedReview))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Review.create(req.body)
  .then(newReview => res.json(newReview))
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  Review.findOne({
    where: {
      id : id
    }
  })
})
