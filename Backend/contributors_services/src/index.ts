import "module-alias/register";
import express from "express";
import * as dotenv from 'dotenv';
import prisma from "@utils/connection/db.connection";
import { StartAllWorkers } from "@workers/run.workers";
import ApiModule from "@modules/api.module";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const App = express();
const PORT = process.env.PORT || 3280;

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