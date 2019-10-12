const UserSevice = require('../services/user.service')

exports.createUser =(req, reply)=>{
   const userAttributes = req.body.user;
   console.log('userAttributes is', userAttributes);
   UserSevice.create(userAttributes).then((user)=>{
     reply.code(200).send(user);
   }).catch((error)=>{
     reply
     .code(500)
     .send({ errors: [error] });
   })
};

exports.getAll = (req, reply)=>{
  UserSevice.getAll().then((user)=>{
    reply.code(200).send(user);
  }).catch((error)=>{
    reply
    .code(500)
    .send({ errors: [error] });
  })
}


exports.updateUser=(req, reply)=>{
   const userAttributes = req.body.user;
   const userId = req.params.id
   console.log('userId is', userId);;
   console.log('userAttributes is', userAttributes);
   UserSevice.getById(userId).then((user)=>{
     console.log('user is', user);
     UserSevice.update(user, userAttributes).then((updaedUser)=>{
       reply.code(200).send(updaedUser);
     }).catch((error)=>{
       reply
       .code(500)
       .send({ errors: [error] });
     })
   }).catch(()=>{
     reply
     .code(400)
     .send({ errors: ['User not found'] });
   })

};
