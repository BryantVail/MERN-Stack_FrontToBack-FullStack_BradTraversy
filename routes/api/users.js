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
const gravatar = require("gravatar");
//Load User Model
const User = require("../../models/User");


//@route    GET 'api/users/test'
//@desc     Tests 'users' route
//@access   public
router.get("/test", (req, res)=> res.json({msg:"Users Works"}));
/*
    example of what URL we want the server to respond to : 
    "localHost:5000/api/posts/test"
    http://localhost:5000/api/users/test
    
*/

//@route    GET 'api/users/reister'
//@desc     Register User
//@access   Public
router.post("/register",(req,res)=> {
    User.findOne({email:req.body.email})
        .then(user => {
            if(user){
                return res.status(400).json({email: "email already exists"})
            }else{
                const avatar = gravatar.url(req.body.email, {
                    s:"200",    //size
                    r:"pg",     //rating
                    d:"mm",     //default
                });
                const newUser = new User({
                    name:req.body.name, 
                    email:req.body.email,
                    avatar: avatar,
                    password:req.body.password
                });
            }
                
        })
});




module.exports = router;















