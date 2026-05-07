import WishlistService from "./wishlist.service";

export default class WishlistController {
    static async getWishlist(req: any, res: any) {
        try {
            const data = await WishlistService.getWishlist(req.params.userId);
            res.json(data);
        } catch (error: any) {
            console.error("Error fetching wishlist:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }

    static async addToWishlist(req: any, res: any) {
        try {
            const { userId, menuId } = req.body;
            const data = await WishlistService.addToWishlist(userId, menuId);
            res.json(data);
        } catch (error: any) {
            console.error("Error adding to wishlist:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }

    static async removeFromWishlist(req: any, res: any) {
        try {
            const data = await WishlistService.removeFromWishlist(
                req.params.userId,
                req.params.menuId
            );
            res.json(data);
        } catch (error: any) {
            console.error("Error removing from wishlist:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }
}
