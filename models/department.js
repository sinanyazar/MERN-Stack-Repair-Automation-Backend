const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
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

module.exports = mongoose.model('Department', departmentSchema);