const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const env = require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello Nodejs'});
});

app.listen(port, () => { console.log(`Listening on ${port}`); });