/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the model files
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateModel` to something more sensible (e.g:
 * `Shops`)
 *
 * NOTE: You may need to import more than one model to create the 
 * controller you need.
 * 
 */
const expenseModel = require('../models/expenses.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const expenseRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

 /* 
 * TODO: delete this handler; it's just a sample
 */ 
expenseRouter.get('/', (req, res) => {
    res.json('hello expenses world')
  })


 // retrieve all expense from the DB
 expenseRouter.get('/', (req, res) => {
    Expense.find().then(expenses => {
        res.json( expenses );
       
    });
});


// retrieve a single expense from the DB
expenseRouter.get('/:expenseId', (req, res) => {
    Expense.findById(req.params.id).then(expense => {
        res.json( expense );
       
    });
});

// add newCreature to DB
expenseRouter.post('/', (req, res) => {
    Expense.create(req.body).then(() => {
        res.status(200).end()
    });
});


// update creature with creatureId to updatedCreature
expenseRouter.put('/:expenseId', (req, res) => {
    Expense.findByIdAndUpdate(req.params.expenseId, req. body).then(expense => {
        res.status(200).end()
    });
});


// deletes creature with creatureId from DB
expenseRouter.delete('/:expenseId', (req, res) => {
    Expense.findByIdAndDelete(req.params.expenseId).then(() => {
        res.status(200).end()
    });
});


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
    expenseRouter
}
