// Admin route to handle users in db 
const GETALLUSER = require('../controller/Users.controller')
const JWTVERIFY = require('../middleware/jwt.verify')
const UpdateCustomerDetail = require('../controller/Customer.controller')


const {Router} = require('../config/index')


Router.get('/users',JWTVERIFY,GETALLUSER)
Router.route('/user').get()



// customer Route 


Router.post("/customerupdate",UpdateCustomerDetail)


module.exports = Router


