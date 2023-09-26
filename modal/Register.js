const {bcrypt} = require('../config')
const mongoose = require('mongoose')

const RegisterSchemas = new mongoose.Schema({
    EMAIL : { type: String,required:true,index:{unique:true} },
    PASSWORD : { type: String ,required:true},
    PHONE : { type: String ,required:true},
    Organization : { type: String ,required:true},
    RefreshToken:{type:String},
})

RegisterSchemas.pre('save', async function(next){
    console.log(this.PASSWORD);
    let salt =  await bcrypt.genSalt(10)
    this.PASSWORD =  await bcrypt.hash(this.PASSWORD,salt)
    next()
})


const RegiterSchema = mongoose.model("salestack", RegisterSchemas);

module.exports = {RegiterSchema};