const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routers/product.router')

const app = express()

//Json Middleware
app.use(express.json())
//Routes
app.use('/api/product', productRoute)

app.get('/', (req, res) => {
    res.send("Hello world!");
});

mongoose.connect("mongodb+srv://blogprakas:vVFEc8dXzOdyBjBd@backenddb.ddxtj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
})
.catch((err) => {
    console.log({"Error" : err})
    // console.log("Connection failed!")
}); 