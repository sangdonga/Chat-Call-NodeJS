var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name : {
        type:String,
        default:"",
        required:true
    },
    email : {
        type:String,
        default:"",
        required:true
    },
    password : {
        type:String,
        default:"",
        required:true
    },
    avatar : {
        type:String,
        default:"",
        required:true
    },
    created : {
        type:Date,
        default:Date.now
    },
    updated : {
        type:Date,
        default:Date.now
    }

});

var Users = mongoose.model('Users',userSchema, 'users');

module.exports = Users;