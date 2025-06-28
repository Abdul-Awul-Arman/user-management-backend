import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import { Users } from './model/users.model';

let server: Server;

const dataBaseUrl = 'mongodb://localhost:27017/userManagement';
const PORT = 4000;

async function main() {
  try {
    await mongoose.connect(dataBaseUrl);
    await Users.syncIndexes();

    console.log('✅ Database connected successfully');

    server = app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
