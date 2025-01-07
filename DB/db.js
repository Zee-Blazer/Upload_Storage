
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB); // Online DB connection

// Database is connected
mongoose.connection.on("connected", () => console.log("Database is connected")); 

// Database was just opened
mongoose.connection.on("open", () => console.log("Database was just opened"));

// Database was disconnected
mongoose.connection.on("disconnected", () => console.log("Database was disconnected"));

// Database is reconnecting
mongoose.connection.on("reconnected", () => console.log("Database is reconnected"));

// Database is Disconnecting
mongoose.connection.on("disconnecting", () => console.log("Database is disconnecting"));

// Database is closed
mongoose.connection.on("close", () => console.log("Database is closed"));
