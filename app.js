const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const loaders = require('./loaders');
const config = require('./config');
const departmentRoutes = require('./routes/department');
const statusRoutes = require('./routes/status');
const customerRoutes = require('./routes/customer');
const productRoutes = require('./routes/product');

config();
loaders();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello Nodejs' });
});

// ! Routes
app.use('/department', departmentRoutes);
app.use('/status', statusRoutes);
app.use('/customer', customerRoutes);
app.use('/product', productRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`); 
});