const jwt = require("jsonwebtoken")
const dotenv = require('dotenv');


// config packages
dotenv.config();

function auth(req, res, next){

    const authToken = req.headers['authorization'];
    console.log(authToken)
    if(authToken != undefined){
        const bearear = authToken.split(" ")
        var token = bearear[1]

        jwt.verify(token,process.env.JWT_SECRET, (error, data) =>{
            if(error){
                res.status(401)
                res.json({error:"Token invalido"})
                
            }else{
              
                req.token = token;
                req.loggedUser = {id: data.id}
                next();
            }
        } )
    
        console.log(bearear)
    }else{
        res.status(401)
        res.json({error:"Token invalido"})
    }
    
}

module.exports =auth