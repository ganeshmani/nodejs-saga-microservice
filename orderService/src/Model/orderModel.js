const Mongoose = require('mongoose');

const orderSchema = new Mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    transactionId : {
        type : String,
        required : true
    },
    status: {
        type: String,
        required : true
    },
    itemCount : {
        type : String,
        required : true
    }
},{ timestamps : true})

module.exports = Mongoose.model('Order',orderSchema)