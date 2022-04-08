
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlCode: {
        type: String,
        lowercase: true,
        trim: true
    }, 
    longUrl: {
        type: String,
        required: true
    }, 
    shortUrl: {
        type: String,
        required: true
    } 
});


module.exports = mongoose.model('Url', urlSchema) 

