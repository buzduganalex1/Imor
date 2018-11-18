const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let videoSchema = new Schema({
    name: {type: String, required: true, max: 100},
    duration: {type: String, required: true},
    thumbnail: {type: String, required: true},
    description: {type: String, required: false}
});


// Export the model
module.exports = mongoose.model('Video', videoSchema);