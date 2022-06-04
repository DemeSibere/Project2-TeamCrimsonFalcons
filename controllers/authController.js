var passport = require('passport');
var db = require('../models/index.js');

function router(app) {

  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/'}), function(req, res) {
    res.redirect('/');
  });

  app.get('/login', function(req, res){
    console.log(req.body);
    if (req.user) {
      console.log("userFound", req.user);
      return res.redirect('/products');
    } 
    res.render('login');
    
  });
  app.post('/login', passport.authenticate('local',{
    successRedirect: '/products',
    failureRedirect: '/login'
  }));

  app.get('/signup', function(req, res) {
    if (req.user) {
      //res.redirect('/products');
      return res.redirect('/products');

    }
     res.render('signup');
  });

  app.post('/signup', function(req, res) {

    // create new User
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      pwd: req.body.pwd
    },
    {
      fields: ['firstName', 'lastName', 'email', 'pwd']
    })
    .then(function(user) {
      return req.login(user, function(err) {
        if (err) { 
          return res.redirect('/signup');
         }
        res.redirect('/login');
        

      })
    }).catch(function(_err) {
    
      console.log(_err)
    });
    return res.redirect('/login');

  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });

}

module.exports = router;
