var homeCtrl = require('../Controllers/home');
var accountCtrl = require('../Controllers/account');
module.exports = function(app, passport){
    
    app.get('/', homeCtrl.home);
    app.get('/account/signup', accountCtrl.signup);
    app.get('/account/signin', accountCtrl.signin);
    app.get('/account/dashboard', isAuthenticated, accountCtrl.dashboard);
    app.post('/account/signin', passport.authenticate('local-signin', {successRedirect: '/account/dashbard', failureRedirect: '/account/signin'}));
    app.post('/account/signup', passport.authenticate('local-signup', {successRedirect: '/account/dashbard', failureRedirect: '/account/signup'}));
    
    //check to see if user is authenticated
    function isAuthenticated(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/account/signin');
    }
};

