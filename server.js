const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()
const path=require("path")
require('dotenv').config()

const PORT = process.env.PORT

//middlewares

app.use(cors({
    origin:"http://localhost:3001",
    methods:["GET","POST","PUT","DELETE"],
  }))
  app.use(express.json())
 
app.use(express.static(path.join(__dirname,'./client/build')))
//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))



app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
  })
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()