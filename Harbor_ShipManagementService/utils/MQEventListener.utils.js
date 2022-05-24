const amqp = require('amqplib/callback_api');


const { MQ_URL } = process.env;
const queue = 'ship';

const shipDenormalize = require('../controllers/shipDenormalize.controller')



amqp.connect(MQ_URL, (connectionError, connection) => {
  console.log(MQ_URL)
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

          //console.warn(object) //debug
          //resolve the event type
          switch (eventType) {
            //airplane events 
            case 'createShip':
              shipDenormalize.ShipCreate(object)
              break;
            case 'updateShip':
              shipDenormalize.ShipUpdate(object)
              break;
            case 'deleteShip':
              shipDenormalize.ShipDelete(object)
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
