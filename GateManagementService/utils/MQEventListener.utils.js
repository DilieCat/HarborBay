const amqp = require('amqplib/callback_api');

const gateDenormalize = require('../controllers/gateDenormalize.controller');

const { MQ_URL } = process.env;
const queue = 'gate';

amqp.connect(MQ_URL, (connectionError, connection) => {
  if (connectionError) throw connectionError;

  // Idempotent: Create channel IF channel not exist
  connection.createChannel((channelError, channel) => {
    if (channelError) throw channelError;
    console.info('Connected to RabbitMQ');

    channel.assertQueue(queue, { durable: false });

    // Subscribe and listen to fired events
    channel.consume(
      queue,
      (message) => {
        try {
          const { eventType, object } = JSON.parse(
            message.content.toString()
          );

         // console.warn(object) //debug
        
          //resolve the event type
          switch (eventType) {
            //gate events
            case 'createGate':
              gateDenormalize.GateCreate(object);
              break;
            case 'updateGate':
              gateDenormalize.GateUpdate(object);
              break;
            case 'deleteGate':
              gateDenormalize.GateDelete(object);
              break;
            default:
              console.warn('Event Type Unknown');
              break;
          }
        } catch (notJsonException) {
          console.warn(notJsonException);
        }
      },
      { noAck: true }
    );
  });
});
