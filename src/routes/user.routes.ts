import { Router } from "express";
import UserController from "../modules/user/user.controller";
const userRoutes = Router();

/**
 * @swagger
 * /api/users/getUsers:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */
userRoutes.get("/getUsers", UserController.getUsers);

/**
 * @swagger
 * /api/users/getUsersByRole:
 *   get:
 *     summary: Get users by role
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: List of users by role
 */
userRoutes.get("/getUsersByRole", UserController.getUsersByRole);

/**
 * @swagger
 * /api/users/updateUser:
 *   post:
 *     summary: Update user information
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
*                 type: string
 */
userRoutes.post("/updateUser", UserController.updateUser);

export default userRoutes;