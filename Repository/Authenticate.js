const { bcrypt,jwt } = require('../config');
const {RegiterSchema} = require('../modal/Register')




async function Register(req,res){
    try {
        let {EMAIL,PASSWORD,PHONE,Organization} = req?.body

        // make validation 

            if(!EMAIL,!PASSWORD,!PHONE,!Organization){
                return res.status(400).json("EMAIL,PASSWORD,PHONE,Organization is required" )
            }
    
            let duplicate = await RegiterSchema.findOne({"EMAIL":EMAIL})


            if(duplicate){
                console.log("in duplicate....");
                return res.status(208).json("Conflit email already Registered...")
            }else{
                let payload = await RegiterSchema.create({EMAIL,PASSWORD,PHONE,Organization})
                return res.status(200).json(`${payload?.EMAIL} Registered successfully....`)
            }



    } catch (error) {
        console.log(error);
    }
}


// login 


async function Login(req,res){
    // generate session and refresh Token 
    let {EMAIL,PASSWORD} = req?.body

    if(!EMAIL || !PASSWORD){
        return res.status(400).json("Email,password  is required....")
    }
    let FoundUser = await RegiterSchema.findOne({"EMAIL":EMAIL}).exec()

    if(!FoundUser){
        return res.status(404).json("EMail doesnt Exist...")
    }

    let match = bcrypt.compare(PASSWORD,FoundUser.PASSWORD)

    if(!match){
        return res.status(400).json("password doesnt match ...")
    }
    // send jwt token 
  
    try{
    let AccessToken =  jwt.sign(
        {USERNAME:FoundUser.EMAIL,
        }
        ,process.env.ACCESS_TOKEN,
        {expiresIn:'120s'})
    let refreshToken =  jwt.sign({USERNAME:FoundUser.EMAIL},process.env.REFRESH_TOKEN,{expiresIn:'1d'})

    FoundUser.RefreshToken = refreshToken

    // save refresh Token in users db

    const result = await FoundUser.save()
    console.log(result);

    res.cookie('jwt',refreshToken,{httpOnly:true,maxAge:24*60*60*1000})
    res.json(AccessToken)

    }catch(error){
        console.log(error);
    }

}




module.exports = {Register,Login}