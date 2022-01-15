const mongoose = require('mongoose');

const db = mongoose.connection;

db.once('open', () => {
    console.log("DB connection succesful");
});

const connectDB = async () => {
    await mongoose.connect(process.env.CONNECTION_STRING)
};

module.exports = {
    connectDB
};