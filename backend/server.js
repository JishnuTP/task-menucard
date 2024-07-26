const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Adjust path as needed
const itemRoutes = require('./routes/items'); // Adjust path as needed
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: ["https://task-menucard-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json("hello");
});

// API Routes
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
