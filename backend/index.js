const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Adjust path as needed
const itemRoutes = require('./routes/items'); // Adjust path as needed
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middlew
// Middleware
// app.use(cors({
//     origin: "https://task-menucard-frontend.vercel.app", // Allow only this origin
//     methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
//     credentials: true // Allow credentials if needed
//   }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://task-menucard-frontend.vercel.app'); // Allow only this origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow these HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow these headers
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow credentials
    if (req.method === 'OPTIONS') {
      return res.status(200).end(); // Respond to preflight requests
    }
    next();
  });
  
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json("hello");
});
app.options('*', cors());

// API Routes
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
