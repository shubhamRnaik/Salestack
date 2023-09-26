const { jwt } = require("../config")

// verify jwt token and send username along with the route




const JWTVERIFY = (req,res,next) =>{
    let AuthHeader = req?.headers['authorization']
    if(!AuthHeader){
        return res.status(401).json("Access Token is invalid or expired")
    }
    let Token = AuthHeader.split(' ')[1]
    jwt.verify(Token,process.env.ACCESS_TOKEN,(err,decoded)=>{
        if(err) return res.status(401).json("Token expired or corrupted relogin once")
        req.USERNAME = decoded.USERNAME
        next()
    })

}

module.exports = JWTVERIFY