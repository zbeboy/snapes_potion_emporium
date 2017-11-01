/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(() => {
        return User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
          .then(user => {
            cody = user
          })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')

  describe('authorized or admin', () => {
    describe('admin user', () => {
      let snape;

      beforeEach(() => {
        return User.create({
          name: 'Severus Snape',
          email: 'snape@hogwarts.com',
          password: 'lilyevans',
          status: 'admin'
        })
          .then(user => {
            snape = user;
          })
      })

      it('expects admin user to have a status of admin', () => {
        expect(snape.status).to.be.equal('admin')
      })

    })

    describe('authorized user', () => {
      let slughorn;

      beforeEach(() => {
        return User.create({
          name: 'Horace Slughorn',
          email: 'slughorn@hogwarts.com',
          password: 'slugclub',
          status: 'authorizedUser'
        })
          .then(user => {
            slughorn = user;
          })
      })

      it('expects authorized user to have a status of authorized', () => {
        expect(slughorn.status).to.be.equal('authorizedUser')
      })
    })

  }) // end authorized and admin users

}) // end describe('User model')
