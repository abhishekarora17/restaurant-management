import AuthService from "./auth.service";

export default class AuthController {

    static async signUp(req: any, res: any) {
        try {
            const data = await AuthService.signUp(req.body, res);
            res.json(data);
        } catch (error : any) {
            console.error("Error during sign-up:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async signIn(req : any, res : any) {
        try{
            const user = await AuthService.signIn(req, res);
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

    static async refreshToken(req : any, res : any) {
        try {
            const { refreshToken } = req.cookies;
            if (!refreshToken) {
                return res.status(401).json({ message: "No refresh token provided" });
            }

            const data = await AuthService.refreshToken(refreshToken);
            if (!data) {
                return res.status(401).json({ message: "Invalid refresh token" });
            }

            res.json(data);
        } catch (error : any) {
            console.error("Error during token refresh:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async signOut(req : any, res : any) {
        try {
            res.clearCookie('refreshToken', {
                httpOnly: true,
                secure: false,
                sameSite: 'strict'
            });
            res.json({ message: "Signed out successfully" });
        } catch (error : any) {
            console.error("Error during sign-out:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}