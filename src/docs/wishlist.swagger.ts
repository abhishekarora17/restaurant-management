/**
 * @swagger
 * tags:
 *   name: Wishlist
 *   description: API endpoints for user wishlist
 */

/**
 * @swagger
 * /api/wishlist:
 *   post:
 *     summary: Add item to wishlist
 *     tags: [Wishlist]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - menuId
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 6820a1b2c3d4e5f607182933
 *               menuId:
 *                 type: string
 *                 example: 6820a1b2c3d4e5f607182931
 *     responses:
 *       200:
 *         description: Item added to wishlist
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wishlist'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/wishlist/{userId}:
 *   get:
 *     summary: Get wishlist by user id
 *     tags: [Wishlist]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Wishlist details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wishlist'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/wishlist/{userId}/{menuId}:
 *   delete:
 *     summary: Remove item from wishlist
 *     tags: [Wishlist]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: menuId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item removed from wishlist
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wishlist'
 *       500:
 *         description: Internal server error
 */
