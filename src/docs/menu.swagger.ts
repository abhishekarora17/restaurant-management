/**
 * @swagger
 * tags:
 *   name: Menus
 *   description: API endpoints for restaurant menus
 */

/**
 * @swagger
 * /api/menus/menu:
 *   post:
 *     summary: Create a menu item
 *     tags: [Menus]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: Farmhouse Pizza
 *               description:
 *                 type: string
 *                 example: Loaded with veggies
 *               price:
 *                 type: number
 *                 example: 299
 *               categoryId:
 *                 type: string
 *                 example: 6820a1b2c3d4e5f607182930
 *               isAvailable:
 *                 type: boolean
 *                 example: true
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Menu created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       500:
 *         description: Internal server error
 *   get:
 *     summary: Get all available menus
 *     tags: [Menus]
 *     responses:
 *       200:
 *         description: List of menus
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Menu'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/menus/menu/category/{categoryId}:
 *   get:
 *     summary: Get menus by category
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of menus in the category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Menu'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/menus/menu/{id}:
 *   get:
 *     summary: Get menu by id
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Menu details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       500:
 *         description: Internal server error
 *   put:
 *     summary: Update menu by id
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               categoryId:
 *                 type: string
 *               isAvailable:
 *                 type: boolean
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Menu updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete menu by id
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Menu deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       500:
 *         description: Internal server error
 */
