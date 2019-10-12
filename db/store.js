const Store = require('openrecord/store/postgres');
const User = require('../app/models/user.model');

const store = new Store({
  client: 'pg',
  connection: 'postgres://demo:edison@localhost:5432/test-crud',
  models: [User]
});

module.exports = store;
