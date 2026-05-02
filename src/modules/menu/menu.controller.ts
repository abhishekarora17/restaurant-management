export default class AuthController {

    static async createMenu(req : any, res : any) {
        try {
            const data = await MenuService.createMenu(req.body, req.file);
            res.json(data);
        } catch (error : any) {
            console.error("Error during menu creation:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}