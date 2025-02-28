import 'module-alias/register';

import express from "express";
import * as dotenv from 'dotenv';
import prisma from '@utils/connections/db.connections';
import ApiModule from '@modules/api.module';
import { setupSwagger } from '@utils/configs/swagger/swagger.config';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
const port = process.env.PORT || 3080;

ApiModule(app);
setupSwagger(app);

async function checkDbConnection() {
  try {
    await prisma.$connect();
    console.log("Database connection established successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

checkDbConnection().then(() => {
  app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
  });
});
