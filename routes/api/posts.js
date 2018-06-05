//posts.js
/*
    post,
    comments[]
*/

const express = require("express");
const router = express.Router();

//http://localHost:5000/api/posts/test
router.get("/test", (req,res)=> res.json({msg:"Posts Works"}));
//{"msg":"Profile Works"}


module.exports = router;












