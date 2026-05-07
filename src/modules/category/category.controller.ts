import CategoryService from "./category.service";

export default class CategoryController {
    static async createCategory(req: any, res: any) {
        try {
            const data = await CategoryService.createCategory(req.body);
            res.json(data);
        } catch (error: any) {
            console.error("Error during category creation:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }

    static async getAllCategories(req: any, res: any) {
        try {
            const data = await CategoryService.getCategories();
            res.json(data);
        } catch (error: any) {
            console.error("Error fetching categories:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }

    static async getCategoryById(req: any, res: any) {
        try {
            const data = await CategoryService.getCategoryById(req.params.id);
            res.json(data);
        } catch (error: any) {
            console.error("Error fetching category by id:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }

    static async updateCategory(req: any, res: any) {
        try {
            const data = await CategoryService.updateCategory(req.params.id, req.body);
            res.json(data);
        } catch (error: any) {
            console.error("Error updating category:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }

    static async deleteCategory(req: any, res: any) {
        try {
            const data = await CategoryService.deleteCategory(req.params.id);
            res.json(data);
        } catch (error: any) {
            console.error("Error deleting category:", error);
            res.status(500).json({ message: error.message || "Internal server error" });
        }
    }
}
