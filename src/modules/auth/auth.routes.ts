// create auth routes
import { Router } from "express";
import AuthController from "./auth.controller";
const authRoutes = Router();

authRoutes.post("/signup", AuthController.signUp);
authRoutes.post("/signin", AuthController.signIn);
authRoutes.post("/google-signin", AuthController.googleSignIn);

export default authRoutes;