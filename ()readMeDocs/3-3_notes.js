//3-3_notes.js
//passport, tokens

/*
    the cx will get a token back after signing in. 
        once user logs in
            email verified
            pass verified
        token returned to user
            'jsonWebtoken' module
            can send that off to access protected routes
        passport & passport-jwt
        createsToken:   
            Json webtoken module
        validate & extract user info
            passport
    first:
        add logging-in functionality
            validate that email exists
            check password
*/