const paymentCompleted = require('./paymentCompleted');
const EventHandler= (message) => {

    switch(message.type){
        case 'ORDER_PAYMENT_COMPLETED':
            paymentCompleted(message);
            break;
                 
        default:
            break;    

    }
            
}