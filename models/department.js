const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
},
{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Department', departmentSchema);