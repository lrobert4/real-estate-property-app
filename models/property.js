/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * Import mongoose connection
 *
 */
const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */
const Property = new mongoose.Schema({
  
    address: {
        type: String,
        required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNum: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    
})

/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('Property', Property);



