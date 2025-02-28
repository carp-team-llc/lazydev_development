
import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";

config({ path: '.env.development' });
const prisma = new PrismaClient();

export default prisma;