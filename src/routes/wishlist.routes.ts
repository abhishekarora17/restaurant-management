import { Router } from "express";
import WishlistController from "../modules/wishlist/wishlist.controller";

const wishlistRoutes = Router();

wishlistRoutes.get("/:userId", WishlistController.getWishlist);
wishlistRoutes.post("/", WishlistController.addToWishlist);
wishlistRoutes.delete("/:userId/:menuId", WishlistController.removeFromWishlist);

export default wishlistRoutes;
