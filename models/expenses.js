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
const Expenses = new mongoose.Schema({
  
    address: {
        type: String,
        //required: true,
    },
    city: {
      type: String,
      //required: true,
    },
    state: {
      type: String,
      //required: true,
    },
    zipCode: {
      type: String,
      //required: true,
    },
    propertyTax: {
        type: String,
        //required: true,
    },
    landscapingFee: {
      type: String,
      //required: true,
    },
    insurance: {
      type: String,
      //required: true,
    },
    mortgage: {
        type: String,
        //required: true,
    },
    
})


/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('Expenses', Expenses);







