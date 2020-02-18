var express = require('express');
var router = express.Router();
var HomeCtrl = require('../Controllers/home');
var accountCtrl = require('../Controllers/account');

router.get('/', HomeCtrl.index);
router.get('/account/signup', accountCtrl.signup);
router.get('/account/signin', accountCtrl.signin);

module.exports = router;