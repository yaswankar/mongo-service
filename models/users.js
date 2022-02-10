const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('Users', usersSchema);