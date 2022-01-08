const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    department: mongoose.Schema.Types.ObjectId,
    status: mongoose.Schema.Types.ObjectId,
    createDate: {
        type: Date,
        default: Date.now
    },
    modifyDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', productSchema);