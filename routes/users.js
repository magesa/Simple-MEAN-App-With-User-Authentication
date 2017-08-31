var express = require("express");

var router = express.Router();

router.get("/register", function(req,res){res.render('register')});
router.get("/login", function(req, res){res.render('login')});
router.get('/logout', function(req,res){
   req.logout();

   req.flash('success_message', 'Logged out successfully !! ');

   res.redirect('/users/login');
});

module.exports = router; 
