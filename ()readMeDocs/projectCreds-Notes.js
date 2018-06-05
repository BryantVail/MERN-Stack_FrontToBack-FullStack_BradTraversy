569

let ProjectCreds = {

    "Creds":[

        {
            mongoString:	"mongodb://<dbuser>:<dbpassword>@ds016068.mlab.com:16068/eatsleepprintdb",
            website:		"mLab.com",
        },
    
    ], 
    "commands": [
                {
                    "name":"dependencies",
                    "command":"npm install express mongoose passport passport-jwt jsonwebtoken body-parser bcryptjs validator"
    
                },
                {
                    "name":"nodemon install",
                    "command":"npm install -D nodemon",
                    "description":"watch node app & update for us instead of having to restart the app every    time.",
                    "response":"[nodemon] 1.17.5\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching: *.*\n[nodemon] starting `node server.js` \nServer Running on port: 5000"
                }
    ],
    "routing":[
        {
            "type":"public", 
            "description":"pages that anyone can view",
            "examples":[
                "home", "about", "contact us"
            ]
        },
        {
            "type":"private",
            "description":"permissions-required access",
            "examples":"viewing profile information"
        }
    ]
};

















