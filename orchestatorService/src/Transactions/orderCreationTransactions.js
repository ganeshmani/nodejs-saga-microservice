const Producer = require('../../../kafkaBroker/kafkaHandler/routes');

module.exports = (message) => {

    switch(message.type) {
        case 'ORDER_CREATED':
             Producer({
                topic : 'EXECUTE_PAYMENT',
                payload : {
                    data : message.payload.data
                }
            })
            break;
        case 'PAYMENT_COMPLETED_STATE' : 
            Producer({
                topic : '',
                payload : {
                    data : message.payload.data
                }
            })    
        default:
            break;    

    }
}