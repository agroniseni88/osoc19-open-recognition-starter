const mongoose = require('mongoose');

const connections_schema = mongoose.Schema(
  {
    accept: {
      type: Boolean, 
    },
    reject: {
      type: Boolean,
    },
    send: {
      type: String,
    },
    connectionKnown: {
      type: String
    },
    request: String
    },
    
   );

module.exports = mongoose.model('connections', connections_schema);
