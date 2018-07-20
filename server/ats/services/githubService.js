var express = require('express');
var router = express.Router();
var Application = require('../models/application');
var User = require('../models/users');
var jobs = require('github-jobs');

jobs.find({
    term : 'Node.js'
}).then(function(results){
    console.log('Found ' + results.length + ' jobs.');
    results.forEach(function(job){
        jobs.findById(job.id).then(function(result){
            console.log('Job : ', result);
        }).catch(function(err){
          console.log('Error: ', err);
        });
    });
}).catch(function(err){
  console.log('Error: ', err);
});

module.exports = jobs