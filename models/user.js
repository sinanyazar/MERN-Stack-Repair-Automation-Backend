const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: String,
    email: String,
    department: mongoose.Schema.Types.ObjectId,
    birthDate: Date,
    createDate: {
        type: Date,
        default: Date.now
    },
    modifyDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);