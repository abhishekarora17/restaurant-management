import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from "./config/swagger";
import userRoutes from "./modules/user/user.routes";

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use auth routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;
