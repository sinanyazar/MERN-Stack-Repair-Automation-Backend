const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    modifyDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', statusSchema);