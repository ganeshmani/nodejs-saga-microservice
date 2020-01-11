const OrderCreationTransactions = require('./orderCreationTransactions');
const Transactions = (message) => {
    switch(message.topic) {
        case 'ORDER_CREATION_TRANSACTIONS':
            OrderCreationTransactions(message);
            break;

        default:
            break;    

    }
}

module.exports = Transactions;