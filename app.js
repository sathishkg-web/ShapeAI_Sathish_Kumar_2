const express=require('express')
const bodyparser=require('body-parser')
const app=express()

app.get('',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post('/',(req,res)=>{
    const n1=Number(req.body.num1)
    const n2=Number(req.body.num2)
    const add=n1+n2
    res.send("The value is"+add)
})

app.listen(3000,(res)=>{
    console.log("server started at port 3000")
})