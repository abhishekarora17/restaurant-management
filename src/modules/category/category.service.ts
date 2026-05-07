import { Category } from "./category.model";
import { Menu } from "../menu/menu.model";

export default class CategoryService {
    static async createCategory(categoryData: any) {
        try {
            const category = await Category.create({
                name: categoryData.name,
                description: categoryData.description,
                isActive: categoryData.isActive,
            });

            return category;
        } catch (error) {
            console.error("Error creating category:", error);
            throw new Error("Error occurred while creating category");
        }
    }

    static async getCategories() {
        try {
            const categories = await Category.find().sort({ createdAt: -1 });
            return categories;
        } catch (error) {
            console.error("Error fetching categories:", error);
            throw new Error("Error occurred while fetching categories");
        }
    }

    static async getCategoryById(id: string) {
        try {
            const category = await Category.findById(id);
            if (!category) {
                throw new Error("Category not found");
            }

            const menus = await Menu.find({ category: id, isAvailable: true });

            return {
                category,
                menus,
            };
        } catch (error) {
            console.error("Error fetching category by id:", error);
            throw new Error("Error occurred while fetching category by id");
        }
    }

    static async updateCategory(id: string, categoryData: any) {
        try {
            const category = await Category.findByIdAndUpdate(
                id,
                {
                    name: categoryData.name,
                    description: categoryData.description,
                    isActive: categoryData.isActive,
                },
                { new: true }
            );

            if (!category) {
                throw new Error("Category not found");
            }

            return category;
        } catch (error) {
            console.error("Error updating category:", error);
            throw new Error("Error occurred while updating category");
        }
    }

    static async deleteCategory(id: string) {
        try {
            const linkedMenus = await Menu.countDocuments({ category: id });
            if (linkedMenus > 0) {
                throw new Error("Category is linked with menus");
            }

            const category = await Category.findByIdAndDelete(id);
            if (!category) {
                throw new Error("Category not found");
            }

            return category;
        } catch (error) {
            console.error("Error deleting category:", error);
            throw new Error("Error occurred while deleting category");
        }
    }
}
