const express = require('express');
const upload = require('../config/multer');
import MenuController from "../modules/menu/menu.controller";
const menuRoutes = express.Router();

menuRoutes.post('/menu', upload.single('image'), MenuController.createMenu);
menuRoutes.get('/menu', MenuController.getAllMenus);
menuRoutes.get('/menu/:id', MenuController.getMenuById);
menuRoutes.put('/menu/:id', upload.single('image'), MenuController.updateMenu);
menuRoutes.delete('/menu/:id', MenuController.deleteMenu);

export default menuRoutes;
