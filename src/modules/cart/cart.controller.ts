import CartService from "./cart.service";

export default class CartController {
    static async getCart(req: any, res: any) {
        try {
            const data = await CartService.getCart(req.params.userId);
            res.json(data);
        } catch (error: any) {
            console.error("Error fetching cart:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }

    static async addToCart(req: any, res: any) {
        try {
            const { userId, menuId, quantity } = req.body;
            const data = await CartService.addToCart(userId, menuId, Number(quantity) || 1);
            res.json(data);
        } catch (error: any) {
            console.error("Error adding to cart:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }

    static async updateCartItem(req: any, res: any) {
        try {
            const { quantity } = req.body;
            const data = await CartService.updateCartItem(
                req.params.userId,
                req.params.menuId,
                Number(quantity)
            );
            res.json(data);
        } catch (error: any) {
            console.error("Error updating cart item:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }

    static async removeFromCart(req: any, res: any) {
        try {
            const data = await CartService.removeFromCart(req.params.userId, req.params.menuId);
            res.json(data);
        } catch (error: any) {
            console.error("Error removing from cart:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }

    static async clearCart(req: any, res: any) {
        try {
            const data = await CartService.clearCart(req.params.userId);
            res.json(data);
        } catch (error: any) {
            console.error("Error clearing cart:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }
}
