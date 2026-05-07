// create auth routes
import { Router } from "express";
import AuthController from "../modules/auth/auth.controller";
const authRoutes = Router();

authRoutes.post("/signup", AuthController.signUp);
authRoutes.post("/signin", AuthController.signIn);
authRoutes.post("/google-signin", AuthController.googleSignIn);
authRoutes.post("/refresh-token", AuthController.refreshToken);
authRoutes.post("/signout", AuthController.signOut);

export default authRoutes;