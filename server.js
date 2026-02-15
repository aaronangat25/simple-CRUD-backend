const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express();


//MIDDLEWARE CONFIGURATIONS
app.use(express.json()); //need this for middleware to postman
app.use(express.urlencoded({extended: false})) //to allow post or add products using forms


//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("Hello HOME")
});




mongoose.connect("mongodb+srv://admin:admin123@backenddb.hppizui.mongodb.net/Node-API?appName=BackendDB")
.then(() => {
    console.log("Connected to database!")
    
    app.listen(3000, () => {
        console.log("Server is running on PORT 3000")
    });
}).catch(() => {
    console.log("Connection failed!")
});
