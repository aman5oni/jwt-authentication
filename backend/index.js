import express from "express";
import cors from "cors";
import { FRONTEND_URL } from "./config/appConfig";
import authRoutes from "./routes/authRoutes";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: FRONTEND_URL,
    method: ["GET", "POST"],
    credentials: true
  })
);

app.use(cookieParser())
app.use(express.json());

app.use(authRoutes);

export default app;
