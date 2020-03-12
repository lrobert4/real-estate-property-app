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
const propertyModel = require('../models/property.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const propertyRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */


 // retrieve all property from the DB
 propertyRouter.get('/', (req, res) => {
    Property.find().then(properties => {
        res.json( properties );
       
    });
});


// retrieve a single property from the DB
propertyRouter.get('/:propertyId', (req, res) => {
    Property.findById(req.params.id).then(property => {
        res.json( property );
       
    });
});

// add newCreature to DB
propertyRouter.post('/', (req, res) => {
    Property.create(req.body).then(() => {
        res.status(200).end()
    });
});


// update creature with creatureId to updatedCreature
propertyRouter.put('/:propertyId', (req, res) => {
    Property.findByIdAndUpdate(req.params.propertyId, req. body).then(property => {
        res.status(200).end()
    });
});


// deletes creature with creatureId from DB
propertyRouter.delete('/:propertyId', (req, res) => {
    Property.findByIdAndDelete(req.params.propertyId).then(() => {
        res.status(200).end()
    });
});



/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
propertyRouter.get('/', (req, res) => {
  res.json('hello property world')
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
    propertyRouter
}
