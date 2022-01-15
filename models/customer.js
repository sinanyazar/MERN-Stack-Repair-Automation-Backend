const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: String,
    email: String,
    product: mongoose.Schema.Types.ObjectId
},
{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Customer', customerSchema);