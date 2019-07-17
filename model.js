const mongoose = require('mongoose');

const profile_schema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, ""],
    },
    lastName: {
      type: String,
      required: [true, ""],
    },
    email: {
      type: String,
      unique: true,
      required: [true, ""],
      lowercase: true,
    },
    image: String,
    password: {
      type: String,
      required: true,
      minlength:5
    },

  }, { timestamps: true }
);

module.exports = mongoose.model('profile', profile_schema);
