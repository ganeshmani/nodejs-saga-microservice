const uuidv1 = require('uuid/v1');

const OrderModel = require('../Model/orderModel');
const Producer = require('../../../kafkaBroker/kafkaHandler/routes');
const CreateOrder = async (req,res) => {

    try {

        const name = req.body.name;
        const itemCount = req.body.itemCount;
        const amount = req.body.amount;

        const order = await new OrderModel({ name : name,itemCount : itemCount,transactionId : uuidv1(),status : 'PENDING' });

        // order.name = name;
        // order.itemCount = itemCount;
        // order.transactionId = uuidv1();
        // order.status = 'PENDING';

        await order.save();

        res.send(order);

        Producer({
            topic : 'ORDER_CREATION_TRANSACTIONS',
            type : 'ORDER_CREATED',
            payload : {
                data : {
                    id : order._id,
                    transactionId : order.transactionId,
                    amount : amount
                }
            }
        })
        

    }
    catch(e){
        console.log(e);
    }
}

module.exports = CreateOrder