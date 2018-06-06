//./config/passport.js
/*
    jwt strategy
*/
const JwtStrategy   = require("passport-jwt").Strategy;
const ExtractJwt    = require("passport-jwt").ExtractJwt;
const mongoose      = require("mongoose");
const User          = mongoose.model("users");
const keys          = require("../config/keys");//out, then back into the directory

const opts          = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey    = keys.secretOrKey;

module.exports  = (passport) => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

    }));
};


















