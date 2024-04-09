const express = require('express');

const server=express();

server.listen(3000);

//inserindo midleware
server.use((req,res)=>{
    console.log('teste')
    next();
})

server.use((req,res,next)=>{
    req.requestTime=Date.now();
})


server.get('/',(req,res)=>{
    console.log(req.requestTime())
    res.send('<h1>Teste</h1>')
})
