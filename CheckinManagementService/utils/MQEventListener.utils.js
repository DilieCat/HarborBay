const amqp = require('amqplib/callback_api');

const checkInDenormalize = require('../controllers/checkInDenormalize.controller');

const { MQ_URL } = process.env;
const queue = 'check_in';

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
            //taxiway events
            case 'createCheckIn':
              checkInDenormalize.CheckInCreate(object);
              break;
            case 'updateCheckIn':
              checkInDenormalize.CheckInUpdate(object);
              break;
            case 'deleteCheckIn':
              checkInDenormalize.CheckInDelete(object);
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
