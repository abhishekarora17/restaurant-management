import { Wishlist } from "./wishlist.model";
import { User } from "../user/user.model";
import { Menu } from "../menu/menu.model";

export default class WishlistService {
    static async getWishlist(userId: string) {
        try {
            const wishlist = await Wishlist.findOne({ user: userId }).populate("menus");
            return wishlist || { user: userId, menus: [] };
        } catch (error) {
            console.error("Error fetching wishlist:", error);
            throw new Error("Error occurred while fetching wishlist");
        }
    }

    static async addToWishlist(userId: string, menuId: string) {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("User not found");
            }

            const menu = await Menu.findById(menuId);
            if (!menu) {
                throw new Error("Menu not found");
            }

            let wishlist = await Wishlist.findOne({ user: userId });
            if (!wishlist) {
                wishlist = await Wishlist.create({ user: userId, menus: [] });
            }

            const exists = wishlist.menus.some((item) => item.toString() === menuId);
            if (!exists) {
                wishlist.menus.push(menu._id);
                await wishlist.save();
            }

            return Wishlist.findById(wishlist._id).populate("menus");
        } catch (error) {
            console.error("Error adding to wishlist:", error);
            throw new Error("Error occurred while adding to wishlist");
        }
    }

    static async removeFromWishlist(userId: string, menuId: string) {
        try {
            const wishlist = await Wishlist.findOne({ user: userId });
            if (!wishlist) {
                throw new Error("Wishlist not found");
            }

            wishlist.menus = wishlist.menus.filter((item) => item.toString() !== menuId);
            await wishlist.save();

            return Wishlist.findById(wishlist._id).populate("menus");
        } catch (error) {
            console.error("Error removing from wishlist:", error);
            throw new Error("Error occurred while removing from wishlist");
        }
    }
}
