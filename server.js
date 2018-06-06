"use strict";
//Bryant Vail
//server.js
//eatSleepPrint

const express       = require("express");
const mongoose      = require("mongoose");
const bodyParser    = require("body-parser");
const passport      = require("passport");      //main authentication module

//routes
const users         = require("./routes/api/users");
const posts         = require("./routes/api/posts");
const profiles      = require("./routes/api/profiles");

const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;//from module.exports

//Connect to MongoDB
mongoose
    .connect(db)
    .then(()=> console.log("MongoDB Connected"))//success /no-error
    .catch(err => console.log(err));//catch argument is assumed to be an error bc its only going to be          raised if the function is encountered by an error. 




//Passport Middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profiles", profiles);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server Running on port: ${port}`));




















