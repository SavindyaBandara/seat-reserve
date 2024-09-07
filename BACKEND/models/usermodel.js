const mongoose = require('mongoose');
const { type } = require('os');

const bookingSchema = new mongoose.Schema({
    username:{
        type: String,
        required : true
    },
    email:{
        type:String,
        required : true,
    },
    traneeID : {
        type: String,
        required: true
    },
    numOfSeats :{
        type: Number,
        required: true
    },
    bookingDate :{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('bookingDetails', bookingSchema );



