const amqp = require('amqplib/callback_api');


const { MQ_URL } = process.env;
const queue = 'container';

const containerDenormalize = require('../controllers/container/containerDenormalize.controller')
const containerShipDenormalize = require('../controllers/container/containerShipDenormalize.controller')
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
              containerShipDenormalize.ContainerShipCreate(object)
              break;
            case 'updateShip':
              shipDenormalize.ShipUpdate(object)
              ContainerShipDenormalize.ContainerShipUpdate(object)
              break;
            case 'deleteShip':
              shipDenormalize.ShipDelete(object)
              ContainerShipDenormalize.ContainerShipUpdate(object)
              break;
            // container events
            case 'containerCreated':
              console.log("containerCreated")
              containerDenormalize.ContainerCreate(object)
              break;
            case 'containerUpdated':
              console.log('containerUpdated')
              containerDenormalize.ContainerUpdate(object)
              break;
            case 'containerRemoved':
              console.log('containerRemoved')
              containerDenormalize.ContainerDelete(object)
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
