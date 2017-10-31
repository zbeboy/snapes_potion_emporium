const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
    rating: {
        type: Sequelize.ENUM('1','2','3','4','5')
    },
    review: {
        type: Sequelize.TEXT,
        validate: {
            len: [10, 1000]
        }
    }
});

module.exports = Review;