const {consola} = require('consola')
const express = require('express')
const {connect,Schema,model} = require('mongoose')

const Router = express.Router()
const bcrypt = require('bcrypt')
const Joi = require('joi')
require('dotenv').config()
const cors = require('cors')
const jwt = require('jsonwebtoken')


module.exports = {consola,cors,Router,Joi,connect,Schema,model,bcrypt,jwt}