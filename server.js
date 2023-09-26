const express = require('express')
const app = express()
const logger = require('./logs/logger')
const {consola,cors,connect} = require('./config')

// log
app.use(logger)

// cross origin resourse sharing 

app.use(cors())
// to make sure in url we dont get file
app.use(express.urlencoded({extended:false}))

// let the json be allowed in req
app.use(express.json())

// static file 



// config Routes

app.use(require('./routes/Authentication.route'))
app.use('/user',require('./routes/users.route'))






app.all('*',(req,res,next)=>{
    res.send('Route not found')
})



app.listen(5000,(err,data)=>{
    if(err) consola.error(err)
    consola.start("Development Server is initializing....")
    consola.success("Server is running on port:",5000)
    connect('mongodb://0.0.0.0:27017',{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        consola.info("mongo server initialized....")
    }).catch(err => consola.error("mongo Error....",err))

}
)


