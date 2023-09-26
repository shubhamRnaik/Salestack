const {model,Schema} = require('../config')


const ServiceSchema = new Schema({

    Customer_name:{
        type:Schema.Types.ObjectId,
        ref:'Customer'
    },
    User:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    arrayField:[
        {
            ServiceOpted:{
                Type:String,
            },
            ServiceAmountInvested:{
                Type:Number
            },
            ServiceStart:{
                Type:Date
            },
            ServiceEnd:{
                Type:Date
            },
            ServiceProfit:{
                Type:String
            },
            ServicePercentage:{
                Type:String
            },


        }
    ]




})

const Service = model("Service",ServiceSchema)
module.exports = Service