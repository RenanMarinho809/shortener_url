import express from 'express';
import connectDB from './config/db.js';

const app = express();

const port = 3000;

connectDB();

app.listen(port, () => {console.log('App is running on port' + port)})