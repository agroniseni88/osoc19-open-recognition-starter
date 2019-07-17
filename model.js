const mongoose = require('mongoose');

const connection_schema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      }
  }
);

module.exports = mongoose.model('connections', connection_schema);