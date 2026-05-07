/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: API endpoints for user cart
 */

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Add item to cart
 *     tags: [Cart]
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
 *               quantity:
 *                 type: number
 *                 example: 2
 *     responses:
 *       200:
 *         description: Item added to cart
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/cart/{userId}:
 *   get:
 *     summary: Get cart by user id
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cart details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Clear cart by user id
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cart cleared successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/cart/{userId}/{menuId}:
 *   put:
 *     summary: Update cart item quantity
 *     tags: [Cart]
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *             properties:
 *               quantity:
 *                 type: number
 *                 example: 3
 *     responses:
 *       200:
 *         description: Cart item updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Remove item from cart
 *     tags: [Cart]
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
 *         description: Cart item removed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       500:
 *         description: Internal server error
 */
