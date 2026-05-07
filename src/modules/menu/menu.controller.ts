import MenuService from "./menu.service";

export default class MenuController {

    static async createMenu(req : any, res : any) {
        try {
            const data = await MenuService.createMenu(req.body, req.file);
            res.json(data);
        } catch (error : any) {
            console.error("Error during menu creation:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getAllMenus(req : any, res : any) {
        try {
            const data = await MenuService.getMenus();
            res.json(data);
        } catch (error : any) {
            console.error("Error fetching menus:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }


    static async getMenuById(req : any, res : any) {
        try {
            const data = await MenuService.getMenuById(req.params.id);
            res.json(data);
        } catch (error : any) {
            console.error("Error fetching menu by id:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getMenusByCategory(req : any, res : any) {
        try {
            const data = await MenuService.getMenusByCategory(req.params.categoryId);
            res.json(data);
        } catch (error : any) {
            console.error("Error fetching menus by category:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async updateMenu(req : any, res : any) {
        try {
            const data = await MenuService.updateMenu(req.params.id, req.body, req.file);
            res.json(data);
        } catch (error : any) {
            console.error("Error updating menu:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async deleteMenu(req : any, res : any) {
        try {
            const data = await MenuService.deleteMenu(req.params.id);
            res.json(data);
        } catch (error : any) {
            console.error("Error deleting menu:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
