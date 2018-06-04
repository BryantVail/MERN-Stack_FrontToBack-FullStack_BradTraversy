"use strict";
//Bryant Vail
//server.js
//eatSleepPrint

const express = require("express");
const mongoose = require("mongoose");

const app = express();

//DB config
const db = require("./config/keys").mongoURI;//from module.exports

//Connect to MongoDB
mongoose
    .connect(db)
    .then(()=> console.log("MongoDB Connected"))//success /no-error
    .catch(err => console.log(err));//catch argument is assumed to be an error bc its only going to be          raised if the function is encountered by an error. 




app.get("/",(req,res)=> res.send("Hello?"));

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server Running on port: ${port}`));




















