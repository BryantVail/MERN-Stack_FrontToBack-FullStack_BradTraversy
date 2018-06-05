//3-2_notes.js
//registration, create user, mongodb, encrypt password, validation(later)

// http://localhost:5000/api/users/register
//server.js>app.use("api/users", users)
//users.js>router.post("/register", (req,res){if email already in use, error, else: create record})
//response below
let responses = [
    {
        "_id": "5b16f8ba11d1850d7073bc1e",
        "name": "bryantVail",
        "email": "BryantVail@yahoo.com",
        "avatar": "//www.gravatar.com/avatar/861ea15979f8e07b9c1df7f5349ff5cf?s=200&r=pg&d=mm",
        "password": "$2a$10$iypxCOhU/LRwFEavh/7ude1f/3Sg9kCqfH5swd4ls0IpxmfEQdkeq",
        "date": "2018-06-05T20:55:22.130Z",
        "__v": 0
    }, 
    
    //also
    {
        "email": "email already exists"
    }
]
