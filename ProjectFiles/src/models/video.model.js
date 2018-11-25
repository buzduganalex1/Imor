const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let videoSchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true, max: 100},
    duration: {type: String, required: true},
    thumbnail: {type: String, required: true},
    description: {type: String, required: false}
}, { _id: false });


// Export the model
module.exports = mongoose.model('Video', videoSchema);