exports.signup = async(req, res) => {
    res.render('account/signup.ejs');
 };

 exports.signin = async(req, res) => {
     res.render('account/signin.ejs');
 }