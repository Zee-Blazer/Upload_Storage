const express = require("express");
const cors = require("cors");
const compression = require('compression');

// Using Dotenv
require('dotenv').config();

const app = express();

// Allow to parse JSON file
app.use(express.json({ limit: "20kb" }));

app.use(compression()); // Compress the load time speed

// Using Cors
app.use(cors());

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
