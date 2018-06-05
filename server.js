"use strict";
//Bryant Vail
//server.js
//eatSleepPrint

const express = require("express");
const mongoose = require("mongoose");

//
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profiles");

const app = express();

//DB config
const db = require("./config/keys").mongoURI;//from module.exports

//Connect to MongoDB
mongoose
    .connect(db)
    .then(()=> console.log("MongoDB Connected"))//success /no-error
    .catch(err => console.log(err));//catch argument is assumed to be an error bc its only going to be          raised if the function is encountered by an error. 




app.get("/",(req,res)=> res.send("Hello?"));

//Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("api/profiles", profiles);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server Running on port: ${port}`));




















