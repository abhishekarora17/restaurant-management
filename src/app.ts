import express from "express";
import authRoutes from "./modules/auth/auth.routes";

const app = express();
app.use(express.json());

// Use auth routes
app.use("/api/auth", authRoutes);

export default app;
