const fastify = require('fastify')({
  logger: true
});

const cors = require('fastify-cors');
const store = require('./db/store');

const userRoutes = require('./app/routes/user.routes')

fastify.register(cors, {
  origin: '*',
  methods: 'OPTION, GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  allowedHeaders: ['Authorization', 'Content-Type'],
  exposedHeaders: ['Authorization', 'Content-Type'],
  optionsSuccessStatus: 204
});

fastify.get('/', async (req, res) => {
  res.send({ hello: 'world' });
});
fastify.register(userRoutes, { prefix: '/v1' });

const start = async () => {
  try {
    await store.ready();
    await fastify.listen(3000, '0.0.0.0');
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  }
  catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
