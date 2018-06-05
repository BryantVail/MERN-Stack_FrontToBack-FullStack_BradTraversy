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
const bcrypt = require("bcryptjs");// this guy says to use bcryptjs & not 'bcrypt'
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

//@route    POST 'api/users/reister'
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
                
                //hash password before sending out
                bcrypt.genSalt(10, (err, salt)=> {
                    bcrypt.hash(newUser.password, salt, (err, hash)=> {
                        if(err){
                            throw err;
                        }
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))//returning the new record to verify the record that was inserted
                            .catch(err => console.log(err))
                    });
                });
            }//end else
                
        })
});//end router.post("/register", (req,res)=>{});

//@route    GET 'api/users/login'
//@desc     Login User / Returning JWT Token
//@access   public
router.post("/login",(req,res) => {
    
});//end router.post("/login",(req,res)=>{});



module.exports = router;















