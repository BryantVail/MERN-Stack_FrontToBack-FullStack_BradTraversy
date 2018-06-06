

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
        },
        {
            "name":"git init",
            "command":"git init",
            "description":"initializes git repository",
            "response":"Reinitialized existing Git repository in C:/Users/Dell/Documents/GitHub/MERN-Stack_FrontToBack-FullStack_BradTraversy/.git/"
        }, 
        {
            "name":"git add all",
            "command":"git add .",
            "description":"add contents from root/command location to the               repository",
        },
        {
            "name":"git something, 2-4, 12min",
            "command":"git commit -am 'Initial commit'",
            "description":"ammending a commit to the current branch"
        }, 
        {
            "name":"branch dervice from existing & switch",
            "command":"git checkout -b {NEW_branch_name} {SOURCE_branch_name}",
            "description":"creates new branch from existing branch, '-b' switch         also moves to the newly created branch",
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

















