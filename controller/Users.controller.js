// GETALLUSER for controller 
const GETALLUSERFROMDB = require('../Repository/Users.repo')

async function GETALLUSER(req,res){
    try {
        let payload = await GETALLUSERFROMDB(req,res)

    } catch (error) {
        console.log(error); 
    }
}






module.exports = GETALLUSER