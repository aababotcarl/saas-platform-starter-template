require('dotenv').config();
const stripe = require('stripe')('sk_test_8rK2xXnFgnkVJX9yRZ3VVVwW');
const STRIPE_API = require('../api/stripe-functions.js');
exports.index = async(req, res) => {
   STRIPE_API.getAllProductsAndPlans().then(products => {
      products = products.filter(product => {
        return product.plans.length > 0;
      });
  
      res.render('home/index.ejs', {products: products});
    });
};