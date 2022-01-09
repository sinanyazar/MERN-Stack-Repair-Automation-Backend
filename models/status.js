const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    }
    },
    { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Status', statusSchema);