const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LicenseSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  application: {
    type: String,
    required: true
  },
  // subscription or one-off payment
  payment_model: {
    type: String,
    required: true
  },
  purchase_date: {
    type: Date
  },
  expires: {
    type: Boolean,
    required: true
  },
  expiry_date: {
    type: Date
  },
  cost: {
    type: Number,
    required: true
  }, 
  // monthly, quarterly, yearly
  cadence: {
    type: String,
    required: true
  }
});

// first arg is what we want our model to be called
// second arg is the schema we just created
const License = mongoose.model("licenses", LicenseSchema);
module.exports = License;