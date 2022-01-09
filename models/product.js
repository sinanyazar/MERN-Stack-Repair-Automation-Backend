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
    status: mongoose.Schema.Types.ObjectId
},
{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Product', productSchema);