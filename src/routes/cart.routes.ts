import { Router } from "express";
import CartController from "../modules/cart/cart.controller";

const cartRoutes = Router();

cartRoutes.get("/:userId", CartController.getCart);
cartRoutes.post("/", CartController.addToCart);
cartRoutes.put("/:userId/:menuId", CartController.updateCartItem);
cartRoutes.delete("/:userId/:menuId", CartController.removeFromCart);
cartRoutes.delete("/:userId", CartController.clearCart);

export default cartRoutes;
