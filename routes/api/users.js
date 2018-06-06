//users.js
/*
    authentication,
    username,
    email,
    password

    when creating a route, instead of using 'app.get'- like we did in server.js, 
    router.get/post/put
*/

const express   = require("express");
const router    = express.Router();         //express.Router();
const gravatar  = require("gravatar");      //avatar community/builder?
const bcrypt    = require("bcryptjs");      // this guy says to use bcryptjs & not 'bcrypt'
const jwt       = require("jsonwebtoken");  //webTokens for security & authorization
const keys      = require("../../config/keys");

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
    const reqEmail  = req.body.email;
    const password  = req.body.password;

    //Find user by email
    User.findOne({email:reqEmail})
        .then(user => {
            //check for user
            if(!user){
                return res.status(404/*not found*/).json({email:"User not found"});
            }
            //if user = true || if email is a username in the DB
            //check password (hashed in server)
            bcrypt.compare(password, user.password/*hashed*/)//returns bool
                .then(isMatch => {
                    if(isMatch){
                        //User Matched
                        const payload = {//JWT Payload created
                            id:     user.id,
                            name:   user.name,
                            avatar: user.avatar
                        };
                        //Sign Token
                        //jwt.sign(payload(what we want to include in the token, ie:user info), )
                        jwt.sign(
                            payload, 
                            keys.secretOrKey, 
                            {expiresIn: 36000}, 
                            (err, token)=>{
                                res.json({
                                    success:true,
                                    token:"Bearer" + token
                                });
                            })
                        //res.json({msg: "Success"}); <- before a token was being passed
                    }else{
                        return(
                            res.status(400).json({password: "Password Incorrect"})
                        );//end return
                    }
                })//end .then(isMatch)=>{}
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});//end router.post("/login",(req,res)=>{});



module.exports = router;


































