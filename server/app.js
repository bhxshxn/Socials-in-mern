const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extened: true }));
app.use('/', require('./routes/index.js'));


const local = "mongodb://localhost:27017/Social";
const url = "mongodb+srv://bhxshxn:bhxshxn@9@cluster0.ixoza.mongodb.net/Social?Writes=true&w=majority";
mongoose.connect(local, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database is connected successfully!!!');
});


app.listen(4000, () => {
    console.log(`Server is running at: http://localhost:${4000}`);
});