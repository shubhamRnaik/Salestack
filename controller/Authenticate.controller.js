
const {Register,Login} = require('../Repository/Authenticate.js')
const {SigninValidation,LoginValidation} = require("../validation/Authentication.validation")


// controller is used to check the req.body 
const signup = async(req,res) =>{
    let Response 
    try {
        let {EMAIL,PASSWORD,PHONE,Organization} = req?.body
        let validation = await SigninValidation({EMAIL,PASSWORD,PHONE,Organization})
        if(validation){
            let payload = await Register(req,res)  
        }
        // res.sendStatus(400).json(validation)
    } catch (error) {
        console.log(error);
    }
}

const signIn = async(req,res)=>{
    let Response 
    try {
        let {EMAIL,PASSWORD} = req?.body
        let validation = await LoginValidation({EMAIL,PASSWORD})
        if(validation){
            let payload = await Login(req,res)  
        }
        
    } catch (error) {
        console.log(error);
    }
}



module.exports = {signup,signIn}