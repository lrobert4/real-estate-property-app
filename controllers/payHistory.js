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
const historyModel = require('../models/payHistory.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const historyRouter = express.Router()

/* Step 4
 * 
 * All request handlers here
 */

 /* 
 * Testing Purposes on localhost:3001/<path_name>
  
historyRouter.get('/', (req, res) => {
    res.json('hello history world')
  })
*/

 // retrieve all property from the DB
 historyRouter.get('/', (req, res) => {
    History.find().then(historys => {
        res.json( historys );
       
    });
});


// retrieve a single property from the DB
historyRouter.get('/:historyId', (req, res) => {
    History.findById(req.params.id).then(history => {
        res.json( history );
       
    });
});

// add newCreature to DB
historyRouter.post('/', (req, res) => {
    History.create(req.body).then(() => {
        res.status(200).end()
    });
});


// update creature with creatureId to updatedCreature
historyRouter.put('/:historyId', (req, res) => {
    History.findByIdAndUpdate(req.params.historyId, req. body).then(history => {
        res.status(200).end()
    });
});


// deletes creature with creatureId from DB
historyRouter.delete('/:historyId', (req, res) => {
    History.findByIdAndDelete(req.params.historyId).then(() => {
        res.status(200).end()
    });
});





/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
    historyRouter
}
