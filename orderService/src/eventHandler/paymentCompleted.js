const orderModel = require('../Model/orderModel')
module.exports = async (message) => {

    try {
        const transactionId = message.payload.transactionId;
        const order = await orderModel.findOneAndUpdate({ transactionId : transactionId },{
            status : 'PAYMENT_COMPLETED'
        });

    }
    catch(e){
        console.log(e);
    }
    //Payment Completed Status Updated on Order Service
}