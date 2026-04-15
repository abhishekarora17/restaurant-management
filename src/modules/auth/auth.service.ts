import bcrypt from "bcryptjs";
import { comparePassword, hashPassword } from "../../utils/hash";
import { generateToken } from "../../utils/jwt";
import { User } from "../user/user.model";
import { verifyGoogleToken } from "./strategies/google.strategies";

export default class AuthService {
    static async signUp(req: any) {

        try {
            const { name, email, password } = req;
            const hashedPassword = await hashPassword(password);

            const user = await User.create({ 
                name,
                email,
                password: hashedPassword,
                provider: 'local',
            });

            return {
                message: "User registered successfully",
                user: user,
                token: generateToken(user)
            };
        } catch (error) {
            throw new Error("Error occurred while signing up");
        }
    }

    static async signIn(email: string, password: string) {
        try {
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

            return {
                user: user,
                token: generateToken(user)
            };
        } catch (error) {
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
            if (!user) {
                user = await User.create({
                    email,
                    name,
                    provider: 'google'
                });
            }
            return {
                user: user,
                token: generateToken(user)
            };
        } catch (error) {
            throw new Error("Error occurred while signing in with Google");
        }
    }
}