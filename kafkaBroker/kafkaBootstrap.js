const kafka = require('kafka-node');

// const client = new kafka.KafkaClient();
// const util = require('util');
// const Producer = new kafka.Producer(client);

const Producer = require('../kafkaBroker/kafkaHandler/Producer');

const producer = new Producer();

const topics = [
    { topic : 'ORDER_SERVICE',partitions : 1,replicationFactor : 1 },
    { topic : 'PAYMENT_SERVICE',partitions : 1,replicationFactor : 1 },
    { topic : 'STOCK_SERVICE',partitions : 1,replicationFactor : 1 },
    { topic : 'ORCHESTATOR_SERVICE',partitions : 1,replicationFactor : 1 }
]

producer.createTopic(topics).then(res => {

})
.catch(err => {
    console.log(`Error ${err}`)
})


// Producer.on('ready',() => {

//     console.log("producer is ready");

//     Producer.createTopics(topics,(err,res) => {
//         if(err) {
//             console.log('error in creating a topic',err);
//         }
//         else{
//             console.log(util.inspect(res,{ showHidden : true,depth : null }))
//             console.log(`Topics created successfully`);
//         }   
//     })

// })

// Producer.on('error',(err) => {
//     console.log(`Kafka Producer Error ${err}`);
// })

