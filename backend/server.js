import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import blogRoute from './routes/blogRoute.js';
import Blog from './models/Blog.js';
process.env.MONGO_URI

const app = express();
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));
app.use(express.json());

app.use(blogRoute);

mongoose.connect(process.env.MONGO_URI,{
});



app.listen(5000, () => console.log('Server running on port 5000'));