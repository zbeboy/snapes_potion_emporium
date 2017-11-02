const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    // attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

//find by id and include all associations(orders, reviews)
router.get('/:id', (req, res, next) => {
  let id = Number(req.params.id);
  User.findAll({
    where: {
      id : id
    },
    include: [{
      all: true
    }]
  })
  .then(user => res.json(user))
  .catch(next)
})

//make new user
router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(newUser => res.json(newUser))
  .catch(next)
})

//update user (for admin)
router.put('/:id', (req, res, next) => {
  let id = Number(req.params.id);
  User.findById(id)
  .then(user => user.update(req.body))
  .then(updatedUser => res.json(updatedUser))
  .catch(next)
})

//delete user (for admin)
router.delete('/:id', (req, res, next) => {
  let id = Number(req.params.id);
  User.destroy({
    where: {
      id : id
    }
  })
  .then(()=>res.send('this is gone'))
  .catch(next)
})
