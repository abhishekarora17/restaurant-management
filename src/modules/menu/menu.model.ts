import mongoose, { Schema, Types } from "mongoose";

export interface IMenu {
    name: string;
    description: string;
    price: number;
    category?: Types.ObjectId;
    imageUrl?: string;
    isAvailable?: boolean;
}

const MenuSchema = new Schema<IMenu>(
    {
        name: { type: String, required: true },
        description: { type: String, default: "" },
        price: { type: Number, required: true },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: false,
        },
        imageUrl: String,
        isAvailable: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);

export const Menu = mongoose.model<IMenu>("Menu", MenuSchema);
