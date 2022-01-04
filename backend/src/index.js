import express from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config.js';
import { connectDB } from './helpers/db.js';
import authRouter from './routers/auth.js';
import companyRouter from './routers/company.js';
import studentRouter from './routers/student.js';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Routers setup
app.use('/auth/', authRouter);
app.use('/company/', companyRouter);
app.use('/student/', studentRouter);

//Start the server
connectDB();
app.listen(PORT, () => {
  console.log(`API listening at http://localhost:${PORT}`);
});
