const { default: mongoose } = require('mongoose')
const {Schema} = require('../config')
const {RegiterSchema} = require('./Register')



const CustomerSchema = new Schema({
    Userid:{
        type:Schema.Types.ObjectId,
        ref:'RegiterSchema'
    },
    CustomerFirstName:{
        type:String,
        required:true,
    },
    CustomerLastName:{
        type:String,
        required:true
    },
    CustomerContact:{
        type:Number,
        required:true
    },
    CustomerGender:{
        type:String,
        required:true
    },
    CustomerEmail:{
        type:String,
        required:true
    },
    CustomerAddress:{
        type:String,
        required:true
    },
    CustomerComment:{
        type:String,
    },
    CustomerReferedBy:{
        type:String,     
    },
    CustomerDocument:{
        type:Array
    },
})


const Customer = mongoose.model("CustomerDetail",CustomerSchema)
module.exports = Customer