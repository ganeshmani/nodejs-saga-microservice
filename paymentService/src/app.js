const Consumer = require('../../kafkaBroker/kafkaHandler/Consumer');
const eventHandler = require('./eventHandler');
try {

    const consumer = new Consumer();
    
    consumer.addTopics(["PAYMENT_SERVICE"]).then(() => {
        consumer.consume(message => {
            console.log("consumed message",message);
            eventHandler(JSON.parse(message.value));
        })
    })
    
    console.log("Payment service Started Successfully");
    
    }
    catch(e){
        console.log(`Orchestrator Error ${e}`);
    }