const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const mongoose= require('mongoose');
const multer = require("multer")
const app = express();

app.use(bodyParser.json());
app.use(multer().any())

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://shiva:ZxJf1KONMThYSpCU@cluster0.yuxls.mongodb.net/Radon_project_six")
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});