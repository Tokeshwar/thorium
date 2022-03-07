const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const userSchema = new mongoose.Schema( {
    Name: String,
    balance: {
        type: Number,
        default : 100
    },
    address : String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]
    },
    isfreeappuser:{
        type: String,
        default : false
    }
},{timestamps : true});

module.exports = mongoose.model('User', userSchema)

