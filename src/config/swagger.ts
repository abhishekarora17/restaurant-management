import swaggerJSDoc, { Options } from 'swagger-jsdoc';

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Restaurant API',
      version: '1.0.0',
      description: 'Restaurant Management API Documentation',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            email: { type: 'string' },
            role: { type: 'string', example: 'user' },
          },
        },
        Category: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '6820a1b2c3d4e5f607182930' },
            name: { type: 'string', example: 'Pizza' },
            description: { type: 'string', example: 'All pizza items' },
            isActive: { type: 'boolean', example: true },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        Menu: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '6820a1b2c3d4e5f607182931' },
            name: { type: 'string', example: 'Farmhouse Pizza' },
            description: { type: 'string', example: 'Loaded with veggies and cheese' },
            price: { type: 'number', example: 299 },
            category: {
              oneOf: [
                { type: 'string', example: '6820a1b2c3d4e5f607182930' },
                { $ref: '#/components/schemas/Category' },
              ],
            },
            imageUrl: { type: 'string', example: 'http://localhost:5000/uploads/pizza.jpg' },
            isAvailable: { type: 'boolean', example: true },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        CartItem: {
          type: 'object',
          properties: {
            menu: {
              oneOf: [
                { type: 'string', example: '6820a1b2c3d4e5f607182931' },
                { $ref: '#/components/schemas/Menu' },
              ],
            },
            quantity: { type: 'number', example: 2 },
          },
        },
        Cart: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '6820a1b2c3d4e5f607182932' },
            user: { type: 'string', example: '6820a1b2c3d4e5f607182933' },
            items: {
              type: 'array',
              items: { $ref: '#/components/schemas/CartItem' },
            },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        Wishlist: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '6820a1b2c3d4e5f607182934' },
            user: { type: 'string', example: '6820a1b2c3d4e5f607182933' },
            menus: {
              type: 'array',
              items: {
                oneOf: [
                  { type: 'string', example: '6820a1b2c3d4e5f607182931' },
                  { $ref: '#/components/schemas/Menu' },
                ],
              },
            },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        AuthResponse: {
          type: 'object',
          properties: {
            accessToken: { type: 'string' },
            user: {
              $ref: '#/components/schemas/User',
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [
    './src/docs/*.ts'
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
