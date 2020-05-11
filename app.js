const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

app.get('/', (req, res) => {
    res.send("we are on home");
});

app.listen(port, () => {
	console.log('connected to server: '+port)
	mongoose.connect(
    process.env.DB_Connection,() => console.log('connected to DB'))
});
