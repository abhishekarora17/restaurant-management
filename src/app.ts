import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from "./config/swagger";

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use auth routes
app.use("/api/auth", authRoutes);

export default app;
