//app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const product = require('./routes/product.route');
const image = require('./routes/image.route');

const app = express();
app.use(bodyParser());

// Set up mongoose connection
let dev_db_url = 'mongodb://abuzduga:abuzduga1@ds211504.mlab.com:11504/vips';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/vips/images', image);

app.use('/api-docs', function (req, res) {
    res.sendFile(__dirname + '/controllers/doc/index.html')
  })

let port = 5500;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});