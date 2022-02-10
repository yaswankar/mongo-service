const dotEnv = require('dotenv')
dotEnv.config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', (err) => {
    console.log('Error', err);
})
db.once('open', () => {
    console.log('Connected to Database');
})

// app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(3000, function(){
 console.log('Server started at 3000');
})