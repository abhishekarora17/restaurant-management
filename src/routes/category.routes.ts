import { Router } from "express";
import CategoryController from "../modules/category/category.controller";

const categoryRoutes = Router();

categoryRoutes.post("/", CategoryController.createCategory);
categoryRoutes.get("/", CategoryController.getAllCategories);
categoryRoutes.get("/:id", CategoryController.getCategoryById);
categoryRoutes.put("/:id", CategoryController.updateCategory);
categoryRoutes.delete("/:id", CategoryController.deleteCategory);

export default categoryRoutes;
