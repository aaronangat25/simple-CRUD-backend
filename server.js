require('dotenv').config();
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


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to database!")
    const PORT = process.env.PORT || 3000;
    app.listen(3000, () => {
        console.log("Server is running on PORT 3000")
    });
}).catch(() => {
    console.log("Connection failed!")
});
