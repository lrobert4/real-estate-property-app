
// Place all functions, classes, and/or DB schemas here for a single model.

// Import mongoose connection
 
const mongoose = require('./connection.js')


// model schema 
 
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



// export the schema

module.exports = mongoose.model('Expenses', Expenses);







