const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

app.get('/', (req, res) => {
    res.send("we are on home");
});

mongoose.connect(
    process.env.DB_Connection, 
    { useNewUrlParser: true },
    () => console.log('connected to DB')
);

app.listen(3000);