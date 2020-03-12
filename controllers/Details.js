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
const Details = require('../models/details.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const detailsRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

 /* 
 * Testing Purposes on localhost:3001/<path_name>
 
detailsRouter.get('/', (req, res) => {
    res.json('hello details world')
  })
 */

 // retrieve all property from the DB
 detailsRouter.get('/', (req, res) => {
    Details.find().then(details => {
        res.json( details );
       
    });
});


// retrieve a single property from the DB
detailsRouter.get('/:detailsId', (req, res) => {
    Details.findById(req.params.detailsId).then(detail => {
        res.json( detail );
       
    });
});

// add newCreature to DB
detailsRouter.post('/', (req, res) => {
    Details.create(req.body).then(() => {
        res.status(200).end()
    });
});


// update creature with creatureId to updatedCreature
detailsRouter.put('/:detailsId', (req, res) => {
    Details.findByIdAndUpdate(req.params.detailsId, req. body).then(detail => {
        res.status(200).end()
    });
});


// deletes creature with creatureId from DB
detailsRouter.delete('/:detailsId', (req, res) => {
    Details.findByIdAndDelete(req.params.detailsId).then(() => {
        res.status(200).end()
    });
});


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
    detailsRouter
}
