const kafkaNode = require('kafka-node');

const client = new kafkaNode.KafkaClient();
const offset = new kafkaNode.Offset(client);

const Consumer = kafkaNode.Consumer;

let consumer;

let consumerReady;

var defaultOptions = {
  encoding: 'utf8', // default is utf8, use 'buffer' for binary data
  fromOffset: -1, // default,
  autoCommit: true,
};

const bindEventListeners = function bindEventListeners(options, topic) {
  consumerReady = new Promise((resolve, reject) => {
    try {
      consumer = new Consumer(
          client,
          [],
          options
      );
      consumer.on('error', (err) => {
        console.log(`Error occured on consumer group ${topic}`);
      })
      resolve(consumer);
    } catch (e) {
      reject(e);
    }
  });
};

const initializeConsumer = function initializeConsumer(defaultTopic) {
  const options = defaultOptions;
  
  bindEventListeners(options, defaultTopic);
};

const ConsumerService = function ConsumerService(defaultTopic) {
  console.log('initializing consumer ')
  initializeConsumer(defaultTopic);
}

ConsumerService.prototype.addTopics = function addTopics(topicArray) {
  return new Promise((resolve, reject) => {
    consumerReady
      .then((consumer) => {
        console.log('adding topics ', topicArray);     
        consumer.addTopics(topicArray, function (err, added) {
          console.log('topics added ', err, added);
          resolve(added);
        });
      })
      .catch((e) =>{
        console.log('errror while creating topic ', e);
      });
  });
};

ConsumerService.prototype.consume = function consume(cb) {
  consumerReady
    .then((consumer) => {
      console.log('consumer ready');
      consumer.on('message', (message) => {
        // console.log('recieved message ', message);
        cb(message);
      })
    })
    .catch((e) =>{
      console.log('errror while consuming', e);
    }) 
}

module.exports = ConsumerService;