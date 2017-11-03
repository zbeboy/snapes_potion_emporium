const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
    rating: {
        type: Sequelize.INTEGER,
        validate: { min: 1, max: 5 }
    },
    review: {
        type: Sequelize.TEXT,
        validate: { len: [10, 1000] }
    }
});

module.exports = Review;
