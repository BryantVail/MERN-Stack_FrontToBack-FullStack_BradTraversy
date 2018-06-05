//users.js
/*
    authentication,
    username,
    email,
    password

    when creating a route, instead of using 'app.get'- like we did in server.js, 
    router.get/post/put
*/

const express = require("express");

const router = express.Router();

//body
router.get("/test", (req, res)=> res.json({msg:"Users Works"}));
/*
    example of what URL we want the server to respond to : 
    "localHost:5000/api/posts/test"
    http://localhost:5000/api/users/test
    
*/
module.exports = router;

















