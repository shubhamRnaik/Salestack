// details of every customer 
const {RegiterSchema} = require('../modal/Register')
const Customer = require('../modal/customer.modal')

// save customer details in user email id 



class CustomerDetails{
    constructor(){}

    async InsertCustomer(req,res){
        let Email = req?.query?.["Email"]
        let payload = req?.body

        console.log(Email);

        // verify if the email exist 

    try {
        let FoundUser = await RegiterSchema.findOne({"EMAIL":Email}).select({_id:1}).exec()
        if(!FoundUser){
            return res.sendStatus(404)
        }

        // save data in customer db
        let result = await Customer.create({
            "Userid":FoundUser._id,
            "CustomerFirstName": payload?.CustomerFirstName,
            "CustomerLastName": payload?.CustomerLastName,
            "CustomerContact": payload?.CustomerContact,
            "CustomerGender": payload?.CustomerGender,
            "CustomerEmail": payload?.CustomerEmail,
            "CustomerAddress": payload?.CustomerAddress,
            "CustomerComment": payload?.CustomerComment,
            "CustomerReferedBy": payload?.CustomerReferedBy,
            "CustomerDocument": payload?.CustomerDocument
        })
        console.log(result);
    } catch (error) {
        console.log(error);
    }
        // if(!FoundUser){
        //     return res.sendStatus(404)
        // }

        // let SaveCustomerdetail = await Customer.create({payload})


        


    }
}


module.exports = CustomerDetails