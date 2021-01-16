const jwt = require("jsonwebtoken")
const dotenv = require('dotenv');


// config packages
dotenv.config();

function auth(req, res, next){

    const authToken = req.headers['authorization'];
    
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
                req.wallet = {wallet: data}
                req.type = data.type
              
                next();
            }
        } )
    
        
    }else{
        res.status(401)
        res.json({error:"Token invalido"})
    }
    
}

module.exports =auth