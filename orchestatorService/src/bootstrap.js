const Consumer = require('../../kafkaBroker/kafkaHandler/Consumer');
const Transactions = require('./Transactions');
try {

const consumer = new Consumer();

consumer.addTopics(["ORCHESTATOR_SERVICE"]).then(() => {
    consumer.consume(message => {
        console.log("consumed message",message);
        Transactions(JSON.parse(message.value));
    })
})

console.log("Orchestator Started successfully");

}
catch(e){
    console.log(`Orchestrator Error ${e}`);
}