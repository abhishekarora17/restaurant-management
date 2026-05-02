import mongoose, { Schema } from "mongoose";


export interface IMenu {
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl?: string;
    isAvailable?: boolean;
}

const MenuSchema = new Schema<IMenu>({
    name: String,
    description: String,
    price: Number,
    category: String,
    imageUrl: String,
    isAvailable: { type: Boolean, default: true }
}, {
    timestamps: true
});

export const Menu = mongoose.model<IMenu>('Menu', MenuSchema)