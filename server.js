const express = require("express");
const cors = require("cors");

// Using Dotenv
require('dotenv').config();

const app = express();

// Allow to parse JSON file
app.use(express.json());

// Using Cors
app.use(cors({
    origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}));

// Connect to database 
require('./DB/db');


/// Start of External Routing ///

// Get Profile
app.use('/profile', require("./Routes/Profile/profile.get"));

// Post Profile
app.use('/profile', require('./Routes/Profile/profile.post'));

// Post Profile
app.use('/profile', require('./Routes/Profile/profile.delete'));

// Get Product
app.use('/product', require("./Routes/Products/product.get"));

// Post Product
app.use('/product', require('./Routes/Products/product.post'));

// Post Product
app.use('/product', require('./Routes/Products/product.delete'));

/// End of External Routing ///


const port = process.env.PORT || 3004;

app.listen(port, () => console.log(`Server is running on port:${port}`));
