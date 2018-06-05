//profile.js
/*
    location,
    bio,
    experiences,
    education,
    socialNetworkLinks[],

*/

const express = require("express");
const router = express.Router();

//@route    GET 'api/profiles/test'
//@desc     Tests profiles route
//@access   public
router.get("/test", (req,res)=> res.json({msg:"Profile Works"}));
//http://localhost:5000/api/profiles/test

module.exports = router;
