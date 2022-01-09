const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const departmentRoutes = require('./routes/department');

config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello Nodejs' });
});

// * Routes
app.use('/department', departmentRoutes);

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('connected');
        app.listen(process.env.PORT, () => { console.log(`Listening on ${process.env.PORT}`); });
    }).
    catch(err => {
        console.log(err);
        throw err;
    });