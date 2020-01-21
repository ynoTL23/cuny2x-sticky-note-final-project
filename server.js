const express = require('express')
const db = require('./config/database')
const bodyParser = require('body-parser')

const app = express() 

const port = process.env.PORT || 5000 

app.listen(port, (res) => console.log(`Server listening on port: ${port}`))