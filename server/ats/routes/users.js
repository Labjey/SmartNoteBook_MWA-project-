

var express = require('express');
var router = express.Router();
var User = require('../models/users');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

mongoose.connect('mongodb://atsuser:atsuser@ds229690.mlab.com:29690/ats');

/* GET users listing. */
router.post('/token', function(req, res, next) {
    const user = req.body;
    let userDb;
    User.findOne()
        .where('username', user.username)
        .where('password', user.password)
        .then(data => {
          const tk = (data.length != 0) ? jwt.sign({data},'my_secret_key') : 'NOT_VALID'; 

          if(data.length != 0){
            res.status(200).json({userId : data._id, token : tk, role : data.role});  
          } else{
            res.status(200).json({userId : data._id, token : tk});
          }
          
        });
  });

  /* Check username exist or not. */
router.get('/checkuser/:username', function(req, res, next) {
  let username = req.param('username');
  console.log("username", username);

  User.findOne()
  .where('username',username)
  .then(user => {
    if(user != null){
      res.status(200).json({exist : true});
    }

    else{
      res.status(200).json({exist : false});
    }
  });

});

  /* GET users listing. */
router.get('/:id', authorization, function(req, res, next) {
  User.findById(req.param('id'))
                .then(data => res.status(200).json(data))
                .catch(err => res.status(500));
  });

    /* GET users listing. */
router.get('/normalUsers',ensureToken, authorization, function(req, res, next) {
  console.log("In normal user")
  User.find()
                .then(data => {console.log("data" + data);res.status(200).json(data);})
                .catch(err => res.status(500));
  });

  function authorization(req, res, next){
    console.log("In authorization");
    jwt.verify(req.token, "my_secret_key", function(err, data){
      if(err){
        res.send('Forbidden');
      }
      
      next();
    });
  }

  function ensureToken(req, res, next) {
    console.log("In ensure token");
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  }

/* POST new application */
router.post('/', function(req, res, next) {
  const user = new User(req.body);
  user.save();
  res.status(200).json(user);
});

/* Update new application */
router.put('/', function(req, res, next) {
    const user = new User(req.body);
    console.log(req.body.companyName);
    User.findById(req.body._id, function(err, doc){
        if(err){
            res.status(500);
        }

        doc.username = req.body.username;
        doc.password = req.body.password;
        doc.createDate = req.body.createDate;
        
        doc.save();
    });
    res.status(200).json(user);
  });

module.exports = router;
