const executePayment = require('./executePayment');
module.exports = (message) => {

    switch(message.topic){
        case 'EXECUTE_PAYMENT':
            executePayment(message.payload);
            break;

        default:
            break;    

    }
}