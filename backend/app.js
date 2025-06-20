const express = require('express')
const app = express()
const PORT = 8080
const connectDB = require('./DB/connectDB')


connectDB()
app.get("/",(req,res)=>{
    res.send("hello world!!")
})

app.listen(PORT,(req,res)=>{
    console.log(`server started!! at http://localhost:${PORT}`)
})