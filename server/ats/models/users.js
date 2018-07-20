
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

//create application schema
var userSchema = new Schema({
    username:{type : String, required : true} ,
    password:{type : String, required : true},
    firstname : {type : String},
    lastname : {type : String},
    email : {type:String, email : true},
    role : {type:String, required:true}
    //appCount :{type : Number} 
    //createdDate : Date
});

//create model object using schema
const User = mongoose.model('User', userSchema);

//make this available to Node applications
module.exports = User;