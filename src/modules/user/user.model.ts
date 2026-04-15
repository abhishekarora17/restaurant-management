import mongoose, { Schema } from "mongoose";


export interface IUser {
    name: string;
    email: string;
    password?: string;
    googleId?: string;
    avatar?: string;
    provider: 'local' | 'google';
    role: 'admin' | 'user';
}

const UserSchema = new Schema<IUser>({
    name: String,
    email: { type: String, unique: true},
    password: String,
    googleId: String,
    avatar: String,
    provider: {
        type: String,
        enum: ['local', 'google'],
        default: 'local'
    },
    role: {
        type: String,
        enum: ['admin','user'],
        default: 'user'
    }
}, {
    timestamps: true
});

export const User = mongoose.model<IUser>('User', UserSchema)