const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    passengerPicture: {
        type: String,
        required: false
    },
    passengerUsername: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Request', userSchema)