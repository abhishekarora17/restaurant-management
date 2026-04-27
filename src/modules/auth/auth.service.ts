import { comparePassword, hashPassword } from "../../utils/hash";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../../utils/jwt";
import { User } from "../user/user.model";
import { verifyGoogleToken } from "./strategies/google.strategies";

export default class AuthService {
    static async signUp(req: any, res: any) {

        try {
            const { name, email, password } = req;
            const hashedPassword = await hashPassword(password);

            const user = await User.create({ 
                name,
                email,
                password: hashedPassword,
                provider: 'local',
            });

            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: 'strict'
            });

            res.json({
                message: "User registered successfully",
                user: user,
                accessToken: accessToken
            });
        } catch (error) {
            console.error("Sign up error:", error);
            throw new Error("Error occurred while signing up");
        }
    }

    static async signIn(req:any, res:any) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email, provider: 'local' });
            if (!user) {
                return null;
            }

            const isMatch = await comparePassword(
                password,
                user.password!
            );
            if (!isMatch) {
                return null;
            }

            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: 'strict'
            });

            return {
                user: user,
                accessToken: accessToken
            };
        } catch (error) {
            console.error("Sign in error:", error);
            throw new Error("Error occurred while signing in");
        }
    }

    static async googleSignIn(token: string) {
        try {
            const payload = await verifyGoogleToken(token);
            if (!payload) {
                return null;
            }
            const { email, name } = payload;
            let user = await User.findOne({ email, provider: 'google' });
            user ??= await User.create({
                email,
                name,
                provider: 'google'
            });
            return {
                user: user,
                accessToken: generateAccessToken(user),
                refreshToken: generateRefreshToken(user)
            };
        } catch (error) {
            console.error("Google sign in error:", error);
            throw new Error("Error occurred while signing in with Google");
        }
    }

    static async refreshToken(oldRefreshToken: string) {
        try {
            const payload: any = verifyRefreshToken(oldRefreshToken);
            if (!payload) {
                return null;
            }
            const user = await User.findById(payload.id);
            if (!user) {
                return null;
            }
            return {
                accessToken: generateAccessToken(user),
                refreshToken: generateRefreshToken(user)
            };
        } catch (error) {
            console.error("Refresh token error:", error);
            throw new Error("Error occurred while refreshing token");
        }
    }
}