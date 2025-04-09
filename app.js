const colors = require('colors')
const express = require('express')

const app = express();

port = 7000;

app.get('/api',(req,res)=>{
    res.status(202).send({message:'server running succesfully', greet:"Hello user", success:true})
})

app.post('/api',(req,res)=>{
    console.log(req.body);
    // {name:"vaidehi"}
    res.status(202).send({message:'this is post', greet:"Hello user from post", success:true})
})

app.delete('/api/:ID',(req,res)=>{
    console.log(req.params)
    res.status(200).send(`this id requested id`)
})

app.put('/api/:ID',(req,res)=>{
    console.log(req.params)
    res.status(200).send('This is api which is used for put')
})

app.get('/about',(req,res)=>{
    res.send("This is about page");
})
app.get('/contact',(req,res)=>{
    res.send("This is contact page")
})

app.listen(port,()=>{
    console.log(`serevr started on http://localhost:${port}`.rainbow);
})

// http://localhost:7000/api