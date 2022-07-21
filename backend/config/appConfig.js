import dotenv from "dotenv";
import { env } from "process";

dotenv.config();

const MONGO_DB_URL = env.MONGO_DB_URL;
const FRONTEND_URL = env.FRONTEND_URL;
const PORT = env.PORT
const JWT_SECRET_KEY= env.JWT_SECRET_KEY;
const JWT_EXPIRE_DAYS = env.JWT_EXPIRE_DAYS

export { MONGO_DB_URL, PORT, FRONTEND_URL,JWT_SECRET_KEY,JWT_EXPIRE_DAYS };
