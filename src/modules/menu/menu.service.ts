import { Menu } from "./menu.model";
const upload = require('../../config/multer');

export default class MenuService {
    static async createMenu(menuData : any, file : any) {
        try {
            let imageUrl = '';
            if(file) {

                if (!file.mimetype.startsWith('image/')) {
                    throw new Error("Invalid file type. Only images are allowed");
                }
    
                if (file.size > 1024 * 1024 * 5) {
                    throw new Error("File size exceeds 5MB");
                }
    
                imageUrl = await upload.single('file').single('file')(file, async (err : any) => {
                    if (err) throw err;
                    return `${process.env.APP_URL}/uploads/${file.filename}`;
                });
            }

            const newMenuData = {
                name: menuData.name,
                description: menuData.description,
                price: menuData.price,
                category: menuData.category,
                imageUrl: imageUrl
            }
    
            const menu = await Menu.create(newMenuData);
            if (!menu) {
                throw new Error("Failed to create menu");
            } else {
                return menu;
            }
        } catch (error) {
            console.error("Error creating menu:", error);
            throw new Error("Error occurred while creating menu");
        }
    }

    static async getMenus() {
        try {
            const menus = await Menu.find({ isAvailable: true });
            if (!menus) {
                throw new Error("No menus found");
            } else {
                return menus;
            }
        } catch (error) {
            console.error("Error fetching menus:", error);
            throw new Error("Error occurred while fetching menus");
        }
    }

    static async getMenuById(id: string) {
        try {
            const menu = await Menu.findById(id);
            if (!menu) {
                throw new Error("Menu not found");
            } else {
                return menu;
            }
        } catch (error) {
            console.error("Error fetching menu by id:", error);
            throw new Error("Error occurred while fetching menu by id");
        }
    }

    static async updateMenu(id: string, menuData: any, file: any) {
        try {
            const menu = await Menu.findByIdAndUpdate(id, menuData, { new: true });
            if (!menu) {
                throw new Error("Menu not found");
            }

            if (file) {
                if (!file.mimetype.startsWith('image/')) {
                    throw new Error("Invalid file type. Only images are allowed");
                }

                if (file.size > 1024 * 1024 * 5) {
                    throw new Error("File size exceeds 5MB");
                }

                const imageUrl = await upload.single('file').single('file')(file, async (err : any) => {
                    if (err) throw err;
                    return `${process.env.APP_URL}/uploads/${file.filename}`;
                });

                menu.imageUrl = imageUrl;
                await menu.save();
            }
            return menu;
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
            } else {
                return menu;
            }
        } catch (error) {
            console.error("Error deleting menu:", error);
            throw new Error("Error occurred while deleting menu");
        }
    }
}
