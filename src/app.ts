import express from "express";
import authRoutes from "./routes/auth.routes";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from "./config/swagger";
import userRoutes from "./routes/user.routes";
import menuRoutes from "./routes/menu.routes";
import categoryRoutes from "./routes/category.routes";
import cartRoutes from "./routes/cart.routes";
import wishlistRoutes from "./routes/wishlist.routes";

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use auth routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);

export default app;
