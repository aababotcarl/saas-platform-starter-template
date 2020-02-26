//signup for the user
exports.signup = async(req, res) => {
    res.render('account/signup.ejs');
 };
//signin for the user
 exports.signin = async(req, res) => {
     res.render('account/signin.ejs');
 };
//dashboard for the user
 exports.dashboard = async(req, res) => {
    res.render('account/dashboard.ejs');
 };