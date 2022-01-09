const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const loaders = require('./loaders');
const config = require('./config');
const departmentRoutes = require('./routes/department');

config();
loaders();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello Nodejs' });
});

// * Routes
app.use('/department', departmentRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`); 
});