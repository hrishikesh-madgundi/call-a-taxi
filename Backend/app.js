const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const cors = require('cors')
app.use(cors());

const connectToDb = require('./db/db');
connectToDb();

const userRoutes = require('./routes/user.routes')

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.use('/users', userRoutes);

module.exports = app;