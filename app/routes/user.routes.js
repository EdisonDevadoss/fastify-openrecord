const { createSchema } = require('./user.schema');
const userController = require('../controllers/user.controllers')

function users(fastify, opts, next) {
  fastify.post('/users', userController.createUser);
  fastify.put('/users/:id', userController.updateUser);
  fastify.get('/users', userController.getAll);
  next();
}

module.exports = users;
