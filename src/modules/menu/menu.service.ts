import { Category } from "../category/category.model";
import { Menu } from "./menu.model";

export default class MenuService {
    static async createMenu(menuData : any, file : any) {
        try {
            let imageUrl = "";

            if (file) {
                if (!file.mimetype.startsWith("image/")) {
                    throw new Error("Invalid file type. Only images are allowed");
                }
                if (file.size > 1024 * 1024 * 5) {
                    throw new Error("File size exceeds 5MB");
                }

                imageUrl = `${process.env.APP_URL}/uploads/${file.filename}`;
            }

            const categoryId = menuData.categoryId || menuData.category;
            if (categoryId) {
                const category = await Category.findById(categoryId);
                if (!category) {
                    throw new Error("Category not found");
                }
            }

            const newMenuData = {
                name: menuData.name,
                description: menuData.description,
                price: menuData.price,
                category: categoryId || undefined,
                imageUrl: imageUrl,
                isAvailable: menuData.isAvailable,
            };

            const menu = await Menu.create(newMenuData);
            if (!menu) {
                throw new Error("Failed to create menu");
            }

            return await Menu.findById(menu._id).populate("category");
        } catch (error) {
            console.error("Error creating menu:", error);
            throw new Error("Error occurred while creating menu");
        }
    }

    static async getMenus() {
        try {
            const menus = await Menu.find({ isAvailable: true }).populate("category");
            if (!menus) {
                throw new Error("No menus found");
            }

            return menus;
        } catch (error) {
            console.error("Error fetching menus:", error);
            throw new Error("Error occurred while fetching menus");
        }
    }

    static async getMenusByCategory(categoryId: string) {
        try {
            const menus = await Menu.find({
                category: categoryId,
                isAvailable: true,
            }).populate("category");

            return menus;
        } catch (error) {
            console.error("Error fetching menus by category:", error);
            throw new Error("Error occurred while fetching menus by category");
        }
    }

    static async getMenuById(id: string) {
        try {
            const menu = await Menu.findById(id).populate("category");
            if (!menu) {
                throw new Error("Menu not found");
            }

            return menu;
        } catch (error) {
            console.error("Error fetching menu by id:", error);
            throw new Error("Error occurred while fetching menu by id");
        }
    }

    static async updateMenu(id: string, menuData: any, file: any) {
        try {
            const categoryId = menuData.categoryId || menuData.category;
            if (categoryId) {
                const category = await Category.findById(categoryId);
                if (!category) {
                    throw new Error("Category not found");
                }
            }

            const updateData = {
                name: menuData.name,
                description: menuData.description,
                price: menuData.price,
                category: categoryId,
                isAvailable: menuData.isAvailable,
            };

            const menu = await Menu.findByIdAndUpdate(id, updateData, { new: true });
            if (!menu) {
                throw new Error("Menu not found");
            }

            if (file) {
                if (!file.mimetype.startsWith("image/")) {
                    throw new Error("Invalid file type. Only images are allowed");
                }

                if (file.size > 1024 * 1024 * 5) {
                    throw new Error("File size exceeds 5MB");
                }

                menu.imageUrl = `${process.env.APP_URL}/uploads/${file.filename}`;
                await menu.save();
            }

            return await Menu.findById(menu._id).populate("category");
        } catch (error) {
            console.error("Error updating menu:", error);
            throw new Error("Error occurred while updating menu");
        }
    }

    static async deleteMenu(id: string) {
        try {
            const menu = await Menu.findByIdAndDelete(id);
            if (!menu) {
                throw new Error("Menu not found");
            }

            return menu;
        } catch (error) {
            console.error("Error deleting menu:", error);
            throw new Error("Error occurred while deleting menu");
        }
    }
}
