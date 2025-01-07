const express = require("express");
const cors = require("cors");

const app = express();

// Allow to parse JSON file
app.use(express.json());

// Using Cors
app.use(cors({
    origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}));

// app.post()

const port = process.env.PORT || 3004;

app.listen(port, () => console.log(`Server is running on port:${port}`));
