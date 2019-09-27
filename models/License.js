const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LicenseSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  license: {
    type: String,
    required: true
  },
  // registered_date: {
  //   type: Date,
  //   required: true
  // },
  // expiry_date: {
  //   type: Date
  // },
  cost: {
    type: Number,
    required: true
  }
});

// first arg is what we want our model to be called
// second arg is the schema we just created
const License = mongoose.model("licenses", LicenseSchema);
module.exports = License;