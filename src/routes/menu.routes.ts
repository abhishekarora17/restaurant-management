const express = require('express');
const menuRouter = express.Router();
const upload = require('../config/multer');
const menuController = require('../controllers/menuController');

menuRouter.post('/menu', upload.single('image'), menuController.createMenu);

module.exports = menuRouter;