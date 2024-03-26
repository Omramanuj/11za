import express from 'express';
import UserRoutes from './userRoute.js'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
dotenv.config();
const app = express();

const mongoURI = process.env.MONGO_URL;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(mongoURI, {

}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.log('Error connecting to MongoDB Atlas:', err.message);
});

const port = 9999;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/',UserRoutes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});