const {RegiterSchema} = require('../modal/Register')


async function GETALLUSERFROMDB(req,res){

    try {
        let USERNAME = req?.USERNAME
        if(!USERNAME){
            return res.status(400).json("Req Token is Tampered")
        }
        let foundUsers = await RegiterSchema.find({}).select({_id:0,PASSWORD:0,__v:0})
        if(!foundUsers){
            return res.status(401).json("no data present in db")
        }
        let FILTERUSER = foundUsers.filter((x)=>{ return (x.EMAIL !== USERNAME)})
        return res.status(200).json(FILTERUSER)
    } catch (error) {
        console.log(error);
    }
}


module.exports = GETALLUSERFROMDB