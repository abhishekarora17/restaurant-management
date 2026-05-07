import { Router } from "express";
import UserController from "../modules/user/user.controller";
const userRoutes = Router();

userRoutes.get("/getUsers", UserController.getUsers);
userRoutes.get("/getUsersByRole", UserController.getUsersByRole);
userRoutes.post("/updateUser", UserController.updateUser);

export default userRoutes;