import express, { Application, Request, Response } from 'express';
import { userRoute } from './controllers/userController';
import { Users } from './model/users.model';
import cors from 'cors';

// todo 
// --global error handler and route mismatch error handle setup

const app: Application = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());

app.use('/users', userRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('This is home route');
});

export default app;
