require('dotenv').config();
const stripe = require('stripe')('sk_test_8rK2xXnFgnkVJX9yRZ3VVVwW');
const STRIPE_API = require('../api/stripe-functions.js');

exports.home = async(req, res) => {
      res.render('home/index.ejs');
};