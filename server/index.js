const mongoose = require('mongoose');
const express = require('express');
mongoose.connect("mongodb://localhost:27017/planer").then(() => {console.log('connect success mf')})

const app = express();

app.use(express.json())

app.listen(3000, () =>{
    console.log('server is freeking running port 3000')
})