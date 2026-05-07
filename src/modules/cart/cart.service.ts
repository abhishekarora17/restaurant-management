import { Cart } from "./cart.model";
import { Menu } from "../menu/menu.model";
import { User } from "../user/user.model";

export default class CartService {
    static async getCart(userId: string) {
        try {
            const cart = await Cart.findOne({ user: userId }).populate("items.menu");
            return cart || { user: userId, items: [] };
        } catch (error) {
            console.error("Error fetching cart:", error);
            throw new Error("Error occurred while fetching cart");
        }
    }

    static async addToCart(userId: string, menuId: string, quantity: number = 1) {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("User not found");
            }

            const menu = await Menu.findById(menuId);
            if (!menu) {
                throw new Error("Menu not found");
            }

            let cart = await Cart.findOne({ user: userId });
            if (!cart) {
                cart = await Cart.create({ user: userId, items: [] });
            }

            const existingItem = cart.items.find(
                (item) => item.menu.toString() === menuId
            );

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.items.push({ menu: menu._id, quantity });
            }

            await cart.save();

            return Cart.findById(cart._id).populate("items.menu");
        } catch (error) {
            console.error("Error adding item to cart:", error);
            throw new Error("Error occurred while adding item to cart");
        }
    }

    static async updateCartItem(userId: string, menuId: string, quantity: number) {
        try {
            const cart = await Cart.findOne({ user: userId });
            if (!cart) {
                throw new Error("Cart not found");
            }

            const item = cart.items.find((cartItem) => cartItem.menu.toString() === menuId);
            if (!item) {
                throw new Error("Cart item not found");
            }

            item.quantity = quantity;
            await cart.save();

            return Cart.findById(cart._id).populate("items.menu");
        } catch (error) {
            console.error("Error updating cart item:", error);
            throw new Error("Error occurred while updating cart item");
        }
    }

    static async removeFromCart(userId: string, menuId: string) {
        try {
            const cart = await Cart.findOne({ user: userId });
            if (!cart) {
                throw new Error("Cart not found");
            }

            cart.items = cart.items.filter((item) => item.menu.toString() !== menuId);
            await cart.save();

            return Cart.findById(cart._id).populate("items.menu");
        } catch (error) {
            console.error("Error removing item from cart:", error);
            throw new Error("Error occurred while removing item from cart");
        }
    }

    static async clearCart(userId: string) {
        try {
            const cart = await Cart.findOne({ user: userId });
            if (!cart) {
                throw new Error("Cart not found");
            }

            cart.items = [];
            await cart.save();

            return cart;
        } catch (error) {
            console.error("Error clearing cart:", error);
            throw new Error("Error occurred while clearing cart");
        }
    }
}
