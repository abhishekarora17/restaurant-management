// create auth routes
import { Router } from "express";
import AuthController from "../modules/auth/auth.controller";
const authRoutes = Router();

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 */
authRoutes.post("/signup", AuthController.signUp);

/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
authRoutes.post("/signin", AuthController.signIn);

/**
 * @swagger
 * /api/auth/google-signin:
 *   post:
 *     summary: Google Sign In
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Google sign-in successful
 *       401:
 *         description: Invalid Google token
 *       500:
 *         description: Internal server error
 */
authRoutes.post("/google-signin", AuthController.googleSignIn);

/**
 * @swagger
 * /api/auth/refresh-token:
 *   post:
 *     summary: Refresh access token
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Token refreshed successfully
 *       401:
 *         description: Invalid refresh token
 *       500:
 *         description: Internal server error
 */
authRoutes.post("/refresh-token", AuthController.refreshToken);

/**
 * @swagger
 * /api/auth/signout:
 *   post:
 *     summary: Sign out user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Sign out successful
 */
authRoutes.post("/signout", AuthController.signOut);

export default authRoutes;