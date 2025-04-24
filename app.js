const colors = require('colors')
const express = require('express')

const app = express();

port = 7000;

app.use(express.json())

app.get('/api',(req,res)=>{
    res.status(202).send({message:'server running succesfully', greet:"Hello user", success:true})
})

app.post('/api',(req,res)=>{
    console.log(req.body);
    // {name:"Batch 42"}
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

const products = [{id:1, name:"iPhone15", category:"Electronics",price:200000,inStock:true},
    {id:2, name:"iPhone16 Pro", category:"Electronics",price:300200,inStock:true},
]

app.get('/getAllProducts',(req,res)=>{
    res.status(200).send({products:products, success:true})
})

app.get('/getProductByID/:ID',(req,res)=>{
    const id = req.params.ID;
    const prod = products.filter(p=> p.id == id)
    res.status(200).send({product:prod, success:true})
})

app.post('/addProduct',(req,res)=>{
    console.log("*****", req.body,"********");
    const newProd = {id:Date.now(), 
        name:req.body.name, 
        category:req.body.category,
        price:req.body.price,
        inStock:true
    }
    products.push(newProd);
    res.send({message:"Product added successfully",success:true})

})

app.delete('/deleteProduct/:ID',(req,res)=>{
    const ID = req.params.ID
    index = products.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"Product not found", success:false})
    }
    products.splice(index,1)
    res.status(200).send({message:"Product deleted", success:true})
})

app.put('/updateProduct/:ID',(req,res)=>{
const ID = req.params.ID
index = products.findIndex(p => p.id == ID)
if(index == -1){
    res.status(200).send({message:"Product not found", success:false})
}
products[index].price = req.body.price
res.status(200).send({message:"product updated", success:true})

})

app.listen(port,()=>{
    console.log(`serevr started on http://localhost:${port}`.rainbow);
})

// http://localhost:7000/api