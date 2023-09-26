const {v4:uuid} = require('uuid')
const {format} = require('date-fns')
const {consola} = require('../config')

const fs = require('fs')
const fs_promise = require('fs/promises')
const path = require('path')


const logEvent = async(Message,logName)=>{
    try {

        const dateTime = `${format(Date.now(),'yyyyMMdd\tHH:mm:ss')}`
        const logItem =  `${uuid()}`
        const Msg = Message?Message:"undefined"
        const Logdata = `${dateTime}\t${logItem}\t${Msg}\n`
        

        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fs_promise.mkdir(path.join(__dirname,'logs'))
        }

        await fs_promise.appendFile(path.join(__dirname,"logs",logName),Logdata)
        
    } catch (error) {
       console.log(error); 
    }
}

const logger = (req,res,next)=>{
    logEvent(`METHOD:${req.method}\t,HOST:${req.hostname}\t,URL:${req.headers.origin}:${req.url}\t`,"log.txt")
    consola.info(`Method:${req?.method} Path:${req?.url} Triggered`)
    next()
}

module.exports = logger