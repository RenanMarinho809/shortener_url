import express from 'express';
import connectDB from './config/db.js';
import router from './routes/url.routes.js';

const app = express();

app.use(express.json());
app.use(router);

const port = 3000;

connectDB();

app.listen(port, () => {console.log(`Server running on port ${port}`)});