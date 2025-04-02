import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoutes from './routes/user.route.js';

connect();

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('hi');
});

export default app;