const express = require('express');
const cors = require('cors');
const connectDB = require('../backend/config/db');
const itemRoutes = require('../backend/routes/items');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    origin:[""],
    methods:["POST","GET"],
    credentials:true
}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("hello")
})

// Routes
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
