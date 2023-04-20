const express = require('express')
const app = express()
const bodyParser=require('body-parser');

const userRoute=require('./src/routes/users')

app.use(bodyParser.json());

app.use('/',userRoute)

module.exports=app