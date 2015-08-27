var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Superhero = mongoose.model('superheros');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/superheros', function(req, res, next) {
  Superhero.find(function(err, superheros){
    // console.log(superheros)
    res.render("api", {title: "Superhero API", superheros: superheros});

  })
});

router.post('/superheros', function(req, res) {
  new Superhero({name: req.body.name})
  .save(function(err, superhero){
  res.redirect('/api/superheros');
  })
});


module.exports = router;
