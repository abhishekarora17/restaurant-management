import jwt from "jsonwebtoken"

export const generateAccessToken = (user : any) => {
    return jwt.sign(
        { id: user._id, role: user.role },  
        process.env.JWT_SECRET as string,
        { expiresIn: '30m' }
    );
};

export const generateRefreshToken = (user : any) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_REFRESH_SECRET as string,
        { expiresIn: '7d' }
    );
};

export const verifyRefreshToken = (token : string) => {
    try {
        return jwt.verify(token, process.env.JWT_REFRESH_SECRET as string);
    } catch (error) {
        return null;
    }
}