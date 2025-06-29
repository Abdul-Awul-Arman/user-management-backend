import mongoose from 'mongoose';
import app from './app';
import { Users } from './app/model/users.model';
import {Server} from "http"
import dotenv from 'dotenv';
dotenv.config();



const PORT =process.env.PORT;
const dataBaseUrl=process.env.DATABASE_URL

let server:Server

async function main() {
  try {
    await mongoose.connect(dataBaseUrl!);
    await Users.syncIndexes();

    console.log('✅ Database connected successfully');

   server= app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

export default app;
