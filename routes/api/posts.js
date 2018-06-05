//posts.js
/*
    post,
    comments[]
*/

const express = require("express");
const router = express.Router();


//@route    GET api/posts/test
//@desc     Tests post route
//@access   public
router.get("/test", (req,res)=> res.json({msg:"Posts Works"}));
//{"msg":"Profile Works"}


module.exports = router;












