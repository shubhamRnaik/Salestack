const {Joi} = require('../config/index')



async function SigninValidation ({EMAIL,PASSWORD,PHONE,Organization}){
    let Schema = Joi.object().keys({
        EMAIL : Joi.string().required(),
        PASSWORD : Joi.string().required(),
        PHONE : Joi.string().required(),
        Organization : Joi.string().required(),
    })

    let validation = await Schema.validate({EMAIL,PASSWORD,PHONE,Organization})
    if(validation.error){
       return {"Status":false,"response":validation?.error}
    }
    return {"Status":true,"response":"validation is success"}
}

async function LoginValidation ({EMAIL,PASSWORD,PHONE,Organization}){
    let Schema = Joi.object().keys({
        EMAIL : Joi.string().required(),
        PASSWORD : Joi.string().required(),
    })

    let validation = await Schema.validate({EMAIL,PASSWORD})
    if(validation.error){
       return {"Status":false,"response":validation?.error}
    }
    return {"Status":true,"response":"validation is success"}
}





module.exports = {SigninValidation,LoginValidation}