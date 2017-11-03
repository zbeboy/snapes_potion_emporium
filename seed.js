const db = require('./server/db');
const User = require('./server/db/models/user');
const Product = require('./server/db/models/product');
const Order = require('./server/db/models/order');
const Review = require('./server/db/models/review');
const Order_Product = require('./server/db/models/order_product');


const users = [
    {
        name: 'Patrick', 
        email: 'patrick@gmail.com', 
        password: 'whysoserious', 
        address: '5 Hanover Square', 
        status: 'authorizedUser'
    },
    {
        name: 'SpongeBob', 
        email: 'sponge@gmail.com', 
        password: 'whysoseriously', 
        address: '6 Hanover Square', 
        status: 'authorizedUser'
    },
    {
        name: 'Nicole', 
        email: 'nicole@gmail.com', 
        password: 'letsgetit', 
        address: 'Times Sqaure', 
        status: 'authorizedUser'
    },
    {
        name: 'Sarah', 
        email: 'sarah@gmail.com', 
        password: 'notnowbuddy', 
        address: 'Upper East Village', 
        status: 'admin'
    },
    {
        name: 'Mario', 
        email: 'mario@gmail.com', 
        password: 'Getit', 
        address: 'Long Island City', 
        status: 'authorizedUser'
    },
    {
        name: 'Jose', 
        email: 'jose@gmail.com', 
        password: 'gitReal', 
        address: '60 Broadway', 
        status: 'admin'
    },
    {
        name: 'Tim', 
        email: 'tim@gmail.com', 
        password: 'hashthatboi', 
        address: '130-10 Bayside', 
        status: 'authorizedUser'
    },
    {
        name: 'Matthew', 
        email: 'matthew@gmail.com', 
        password: 'helloandyou', 
        address: '10 Hanover Square', 
        status: 'authorizedUser'
    },
    {
        name: 'Jonathan', 
        email: 'jonathan@gmail.com', 
        password: '2452019', 
        address: '45 Hanover Square', 
        status: 'authorizedUser'
    },
    {
        name: 'Sandy', 
        email: 'sandy@gmail.com', 
        password: 'dankyy', 
        address: '43 Broadway', 
        status: 'authorizedUser'
    },
    {
        name: 'Krabs', 
        email: 'krabs@gmail.com', 
        password: 'Mikeyyy', 
        address: '60 Pearl Street', 
        status: 'authorizedUser'
    },
    {
        name: 'Shrimpy', 
        email: 'shrimpy@gmail.com', 
        password: 'ichooseyou', 
        address: '40 Wall Street', 
        status: 'authorizedUser'
    },
    {
        name: 'Michael', 
        email: 'michael@gmail.com', 
        password: 'yourechosen21', 
        address: '26 Fulton Street', 
        status: 'authorizedUser'
    }
];

const products = [
    {   
        name: 'Cure for Boils', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/c/c9/Cure-for-boils.png/revision/latest/scale-to-width-down/42?cb=20150226163753', 
        description: 'It cures boils.', 
        price: 3.12, 
        category: 'cure/healthy',
        orderId: 1
    },
    {
        name: 'Forgetfulness Potion', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/a/aa/Forgetfulness-potion.png/revision/latest/scale-to-width-down/43?cb=20150226164846', 
        description: 'You forget everything that you knew.', 
        price: 100.45, 
        category: 'medical',
        orderId: 2
    },
    {
        name: 'Herbicide Potion', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/d/d0/Herbicide.png/revision/latest/scale-to-width-down/56?cb=20150226163145', 
        description: 'Herbal effect.', 
        price: 54.56, 
        category: 'cure/healthy',
        orderId: 1
    },
    {
        name: 'Wildeye Potion', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/9f/Wideye-or-awakening-potion.png/revision/latest/scale-to-width-down/56?cb=20150226165512', 
        description: 'Gives you the wildest eyes.', 
        price: 40.56, 
        category: 'weird/physical',
        orderId: 4
    },
    {
        name: 'Sleeping Draught', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/1/1e/Sleeping-draught.png/revision/latest/scale-to-width-down/37?cb=20150226164152', 
        description: 'Makes you sleep.', 
        price: 30.99, 
        category: 'cure/healthy/medical',
        orderId: 5
    },
    {
        name: 'Swelling Solution', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/9b/SwellSol.png/revision/latest/scale-to-width-down/69?cb=20150226165129', 
        description: 'Makes you swell up really fast.', 
        price: 99.99, 
        category: 'weird/physical',
        orderId: 14
    },
    {
        name: 'Antidote to Uncommon Poison', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/96/Antidote-to-common-poisons.png/revision/latest/scale-to-width-down/66?cb=20150226164351', 
        description: 'Very useful for any type of poison.', 
        price: 200.99, 
        category: 'cure/healthy/medical',
        orderId: 13
    },
    {
        name: 'Shrinking Potion', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/95/Shrinking-solution-part-2.png/revision/latest/scale-to-width-down/46?cb=20150226164644', 
        description: 'Transforms your body into size of an ant.', 
        price: 500.89, 
        category: 'weird/physical',
        orderId: 10
    },
    {
        name: 'Poison Antidote', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/e/ee/DriedBillywigStings.png/revision/latest/scale-to-width-down/81?cb=20110830083743', 
        description: 'Poison antidote.', 
        price: 20.99, 
        category: 'cure/healthy/medical',
        orderId: 6
    },
    {
        name: 'Girding Potion', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/e/e0/FlobberwormMucus.png/revision/latest/scale-to-width-down/81?cb=20110830091650', 
        description: 'Girding potion.', 
        price: 30.99, 
        category: 'weird',
        orderId: 7
    },
    {
        name: 'Wit-Sharpening Potion', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/21/DragonBlood.png/revision/latest/scale-to-width-down/79?cb=20120919184642', 
        description: 'Sharpens your wit by a lot.', 
        price: 28.99, 
        category: 'enhancement',
        orderId: 8
    },
    {
        name: 'Invigoration Draught', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/98/Invigoration-draught.png/revision/latest/scale-to-width-down/101?cb=20140123170636', 
        description: 'Invigorates you.', 
        price: 10.99, 
        category: 'weird',
        orderId: 9
    },
    {
        name: 'Love Potion', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/3/39/Bottle-of-love-potion-lrg.png/revision/latest/scale-to-width-down/101?cb=20151216202016', 
        description: 'Makes anyone fall in love with you.', 
        price: 5.99, 
        category: 'love',
        orderId: 11
    },
    {
        name: 'Shrinking Solution', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/95/Shrinking-solution-part-2.png/revision/latest/scale-to-width-down/46?cb=20150226164644', 
        description: 'Shrinks you into any size you desire', 
        price: 200.89, 
        category: 'physical',
        orderId: 4
    },
    {
        name: 'Felix Felicis', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/d/d5/Felix_Felicis.png/revision/latest/scale-to-width-down/56?cb=20130828200950', 
        description: 'Just try this.', 
        price: 15.99, 
        category: 'weird',
        orderId: 10
    },
    {
        name: 'Amortentia', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/a/ac/Love.png/revision/latest/scale-to-width-down/101?cb=20121229001803', 
        description: 'Guaranteed satisfaction.', 
        price: 30.00, 
        category: 'love/physical',
        orderId: 6
    },
    {
        name: 'Hiccoughing Solution', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/92/HiccoughingSolution.png/revision/latest/scale-to-width-down/58?cb=20131128000240', 
        description: 'Hiccups for days.', 
        price: 7.99, 
        category: 'physical',
        orderId: 14
    },
    {
        name: 'Draught of Living Death', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/d/d7/Draught-of-living-death.png/revision/latest?cb=20121027143847', 
        description: 'You will either live or die. Take your chances.', 
        price: 68.99, 
        category: 'death',
        orderId: 12
    },
    {
        name: 'Polyjuice Solution', 
        imageURL: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/26/Polyjuice-potion.png/revision/latest/scale-to-width-down/101?cb=20140528022327', 
        description: 'Delicious juice.', 
        price: 38.99, 
        category: 'weird',
        orderId: 8
    },
];

const orders = [
    {
        status: 'Cart',
        userId: 1
    },
    {
        status: 'Processing',
        userId: 2
    },
    {
        status: 'Created',
        userId: 3
    },
    {
        status: 'Cart',
        userId: 4
    },
    {
        status: 'Cart',
        userId: 5
    },
    {
        status: 'Cart',
        userId: 6
    },
    {
        status: 'Cancelled',
        userId: 7
    },
    {
        status: 'Cart',
        userId: 8
    },
    {
        status: 'Cart',
        userId: 9
    },
    {
        status: 'Cart',
        userId: 10
    },
    {
        status: 'Processing',
        userId: 11
    },
    {
        status: 'Completed',
        userId: 12
    },
    {
        status: 'Cart',
        userId: 13
    },
    {
        status: 'Cart',
        userId: 9
    }
]


const reviews = [
    {
        rating: 5,
        review: 'I like it so much!',
        userId: 1,
        productId: 1
    }, 
    {
        rating: 1,
        review: 'What is this product.',
        userId: 1,
        productId: 2
    }, 
    {
        rating: 1,
        review: 'Not a big fan of this product.',
        userId: 2,
        productId: 2
    }, 
    {
        rating: 2,
        review: 'Really bad side-effect but I would recommend it.',
        userId: 3,
        productId: 3
    }, 
    {
        rating: 2,
        review: 'I still do not what this thing does.',
        userId: 12,
        productId: 4
    }, 
    {
        rating: 5,
        review: 'Will buy this again for sure!',
        userId: 2,
        productId: 5
    }, 
    {
        rating: 4,
        review: 'Valentine gift to your crush.',
        userId: 4,
        productId: 6
    }, 
    {
        rating: 3,
        review: 'I think this is not a bad one.',
        userId: 5,
        productId: 7
    }, 
    {
        rating: 2,
        review: 'I would get something else on the website.',
        userId: 8,
        productId: 8
    },
    {
        rating: 1,
        review: 'I do not recommend this one.',
        userId: 9,
        productId: 9
    }, 
    {
        rating: 4,
        review: 'One of the most useful potion out right now.',
        userId: 10,
        productId: 10
    }, 
    {
        rating: 4,
        review: 'I can be like Antman in real life!',
        userId: 11,
        productId: 11
    }, 
    {
        rating: 4,
        review: 'Very useful to take on a hike to a mountain.',
        userId: 9,
        productId: 12
    }, 
    {
        rating: 2,
        review: 'This really makes you swell up really fast.',
        userId: 8,
        productId: 13
    }, 
    {
        rating: 1,
        review: 'Get some other potions. Not this one.',
        userId: 7,
        productId: 14
    }, 
    {
        rating: 2,
        review: 'To be honest. This is bad.',
        userId: 7,
        productId: 15
    }, 
    {
        rating: 3,
        review: 'I will get this again.',
        userId: 2,
        productId: 16
    }, 
    {
        rating: 2,
        review: 'This is not as good as I expected it.',
        userId: 12,
        productId: 17
    },
    {
        rating: 5,
        review: 'This is really good.',
        userId: 10,
        productId: 18
    },
    {
        rating: 4,
        review: 'I like it. Amazing.',
        userId: 4,
        productId: 19
    }
];

const order_products = [
    {
        fixedPrice: 100,
        productId: 1,
        orderId: 1
    },
    {
        fixedPrice: 100,
        productId: 3,
        orderId: 1
    },
    {
        fixedPrice: 100,
        productId: 2,
        orderId: 2
    },
    {
        fixedPrice: 100,
        productId: 4,
        orderId: 4
    },
    {
        fixedPrice: 100,
        productId: 14,
        orderId: 4
    },
    {
        fixedPrice: 100,
        productId: 5,
        orderId: 5
    },
    {
        fixedPrice: 100,
        productId: 9,
        orderId: 6
    },
    {
        fixedPrice: 100,
        productId: 16,
        orderId: 6
    },
    {
        fixedPrice: 100,
        productId: 10,
        orderId: 7
    },
    {
        fixedPrice: 100,
        productId: 11,
        orderId: 8
    },
    {
        fixedPrice: 100,
        productId: 19,
        orderId: 8
    },
    {
        fixedPrice: 100,
        productId: 12,
        orderId: 9
    },
    {
        fixedPrice: 100,
        productId: 8,
        orderId: 10
    },
    {
        fixedPrice: 100,
        productId: 15,
        orderId: 10
    },
    {
        fixedPrice: 100,
        productId: 13,
        orderId: 11
    },
    {
        fixedPrice: 100,
        productId: 18,
        orderId: 12
    },
    {
        fixedPrice: 100,
        productId: 7,
        orderId: 13
    },
    {
        fixedPrice: 100,
        productId: 6,
        orderId: 14
    },
    {
        fixedPrice: 100,
        productId: 17,
        orderId: 14
    }
];

const seed = () =>
  Promise.all(users.map(user =>
    User.create(user))
  )
  .then(() =>
  Promise.all(products.map(product =>
    Product.create(product))
  ))
  .then(() =>
  Promise.all(orders.map(order =>
    Order.create(order))
  ))
  .then(() =>
  Promise.all(reviews.map(review =>
    Review.create(review))
  ))
  .then(() =>
  Promise.all(order_products.map(order_product =>
    Order_Product.create(order_product))
  ));
const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
    return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();