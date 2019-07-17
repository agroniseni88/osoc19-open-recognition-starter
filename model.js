const mongoose = require('mongoose');

const profile_schema = mongoose.Schema(
  {
    accept: {
      type: Boolean, 
    },
    reject: {
      type: Boolean,
    },
    send: {
      type: id,
    },
    request: id
    },
   );

module.exports = mongoose.model('profile', profile_schema);
