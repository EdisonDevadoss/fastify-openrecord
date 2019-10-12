const User = require('../models/user.model');

function update(user, attributes){
  return user.update(attributes);
}

function getAll() {
  return User;
}

function getById(id) {
  return User.get(id);
}


function create(attributes){
  console.log('User is', User);
  return User.create(attributes);
}

module.exports = {create, update, getAll, getById}
