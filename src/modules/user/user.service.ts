import { User } from "./user.model";

export default class UserService {
    static async getUsers() {
        try {
            return await User.find();
        } catch (error) {
            console.error("Error fetching users:", error);
            throw new Error("Error occurred while fetching users");
        }
    }

    static async getUsersByRole(role: string) {
        try {
            return await User.find({ role });
        } catch (error) {
            console.error("Error fetching users by role:", error);
            throw new Error("Error occurred while fetching users by role");
        }
    }

    static async updateUser(id: string, name: string, email: string) {
        try {
            const user = await User.findById(id);
            if (!user) {
                throw new Error("User not found");
            }
            user.name = name || user.name;
            user.email = email || user.email;
            await user.save();
            return user;
        } catch (error) {
            console.error("Error updating user:", error);
            throw new Error("Error occurred while updating user");
        }
    }
}