const amqp = require('amqplib/callback_api');


const { MQ_URL } = process.env;
const queue = 'dock';

const rentalAgreementDenormalize = require('../controllers/rentalAgreement/rentalAgreementDenormalize.controller')
const shipDenormalize = require('../controllers/ship/shipDenormalize.controller')



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
            // Ship events
            case 'createShip':
              shipDenormalize.ShipCreate(object)
              break;
            // Rental Agreement events
            case 'createRentalAgreement':
              console.log("createRentalAgreement")
              rentalAgreementDenormalize.RentalAgreementCreate(object)
              break;
            case 'updateRentalAgreement':
              console.log('updateRentalAgreement')
              rentalAgreementDenormalize.RentalAgreementUpdate(object)
              break;
            case 'deleteRentalAgreement':
              console.log('deleteRentalAgreement')
              rentalAgreementDenormalize.RentalAgreementDelete(object)
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
