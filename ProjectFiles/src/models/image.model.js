const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let imageSchema = new Schema({
    _id: {type: String, required: true},
    type: {type: String, required: true},
    name: {type: String, required: true, max: 100},
    contentUrl: {type: String, required: true},
    author: {type: String, required: true},
    contentLocation: {type: String, required: true},
    datePublished: {type: String, required: true},
    description: {type: String, required: false}
}, { _id: false });


// Export the model
module.exports = mongoose.model('Image', imageSchema);