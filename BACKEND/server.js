const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors');
require('dotenv').config();

const app =  express();

app.use(cors());
app.use(bodyParser.json());

const bookingRoutes = require("./routes/userRoutes.js");

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGODB_URL;

mongoose.connect(DB_URL);

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB connected Succesfully.");
});

app.use("/booking", bookingRoutes);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });

