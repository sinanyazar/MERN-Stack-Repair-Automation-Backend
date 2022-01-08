const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const departmentRoutes = require('./routes/department');

// ! Environment
const port = process.env.PORT || 3000;
const cnn = process.env.CONNECTION_STRING;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello Nodejs' });
});

// * Routes
app.use('/department', departmentRoutes);

mongoose.connect(cnn)
    .then(() => {
        console.log('connected');
        app.listen(port, () => { console.log(`Listening on ${port}`); });
    }).
    catch(err => {
        console.log(err);
        throw err;
    });