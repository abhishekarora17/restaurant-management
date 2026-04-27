import UserService from "./user.service";

export default class UserController {
    static async getUsers(req: any, res: any) {
        try {
            const users = await UserService.getUsers();
            res.json(users);
        } catch (error : any) {
            console.error("Error fetching users:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getUsersByRole(req: any, res: any) {
        try {
            const { role } = req.body;
            const users = await UserService.getUsersByRole(role);
            res.json(users);
        } catch (error : any) {
            console.error("Error fetching users by role:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async updateUser(req: any, res: any) {
        try {
            const { id, name, email } = req.body;
            const updatedUser = await UserService.updateUser(id, name, email);
            res.json(updatedUser);
        } catch (error : any) {
            console.error("Error updating user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}