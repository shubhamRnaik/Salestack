// all details regarding customer 
const  Customer = require('../Repository/Customer')
const CustomerInstance = new Customer()



const UpdateCustomerDetail = (req,res) =>{
    try {
        let EMAIL = req?.query
        let Payload = req?.body
        let response = CustomerInstance.InsertCustomer(req,res)
    } catch (error) {
        console.log(error);
    }
}




module.exports = UpdateCustomerDetail