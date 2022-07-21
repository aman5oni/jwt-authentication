import express from "express";
import { Login, Register } from "../controllers/authControllers";
import { checkUser } from "../middlewares/authMiddlewares";
const authRoutes = express.Router();

authRoutes.route("/").post(checkUser);

authRoutes.route("/register").post(Register);

authRoutes.route("/login").post(Login);

export default authRoutes;
