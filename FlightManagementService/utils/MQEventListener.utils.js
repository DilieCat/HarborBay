const amqp = require('amqplib/callback_api');


const flightDenormalize = require('../controllers/flightDenormalize.controller');
const airplaneDenormalize = require('../controllers/airplaneDenormalize.controller')

const { MQ_URL } = process.env;
const queue = 'flight';
const queue2 = 'airplane'

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

            //flight events
            case 'createFlight':
                flightDenormalize.FlightCreate(object);
              break;
            case 'updateFlight':
                flightDenormalize.FlightUpdate(object);
              break;
            case 'deleteFlight':
              flightDenormalize.FlightDelete(object);
              break;
            case 'createAirplane':
              airplaneDenormalize.AirplaneCreate(object)
              break;
            case 'updateAirplane':
              airplaneDenormalize.AirplaneUpdate(object)
              break;
            case 'deleteAirplane':
              airplaneDenormalize.AirplaneDelete(object)
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
