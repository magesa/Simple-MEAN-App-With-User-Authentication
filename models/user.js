var mongooseObject = require('mongoose');

var Schema = mongooseObject.Schema({

  username : {
    type: String,
    index: true
    },
  name: {
    type: String
    },
  email: {
    type: String
    },
  password: {
    type: String
  },
});

var User = module.exports = mongooseObject.model('User', Schema);

module.exports = router;
