import AuthService from "./auth.service";

export default class AuthController {
    constructor() {}

    static async signUp(req: any, res: any) {
        try {
            const data = await AuthService.signUp(req.body);
            res.json(data);
        } catch (error : any) {
            console.error("Error during sign-up:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async signIn(req : any, res : any) {
        try{
            const { email, password } = req.body;
            const user = await AuthService.signIn(email, password);
            if (!user) {
                return res.status(401).json({ message: "Invalid credentials" });
            }
            res.json(user);
        } catch (error : any) {
            console.error("Error during sign-in:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async googleSignIn(req : any, res : any) {
        try {
            const { token } = req.body;
            const user = await AuthService.googleSignIn(token);
            if (!user) {
                return res.status(401).json({ message: "Invalid Google token" });
            }
            res.json(user);
        } catch (error : any) {
            console.error("Error during Google sign-in:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}