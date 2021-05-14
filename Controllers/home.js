exports.home = async(req, res) => {
      res.render('home/index.ejs', { layout: 'layouts/landing' });
};