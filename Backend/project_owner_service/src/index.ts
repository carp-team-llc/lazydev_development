import 'module-alias/register';

import prisma from '@utils/connection/db.connection';
import * as dotenv from 'dotenv';
import express from "express";
import { StartAllWorkers } from '@workers/worker.run';
import ApiModule from '@modules/api.module';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const App = express();
const PORT = process.env.PORT || 3180;

ApiModule(App);
StartAllWorkers();

async function CheckDBConnection () {
  try {
    await prisma.$connect();
    console.log("Database connection established successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

CheckDBConnection().then(() => {
  App.listen(PORT, () => {
    console.log(`Server running on: ${process.env.LOCAL}:${PORT}`);
  });
});
