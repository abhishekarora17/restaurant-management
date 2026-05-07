import mongoose, { Schema, Types } from "mongoose";

interface ICartItem {
    menu: Types.ObjectId;
    quantity: number;
}

export interface ICart {
    user: Types.ObjectId;
    items: ICartItem[];
}

const CartItemSchema = new Schema<ICartItem>(
    {
        menu: { 
            type: Schema.Types.ObjectId, 
            ref: "Menu", 
            required: true 
        },
        quantity: { 
            type: Number, 
            default: 1, 
            min: 1 
        },
    },
    { _id: false }
);

const CartSchema = new Schema<ICart>(
    {
        user: { 
            type: Schema.Types.ObjectId, 
            ref: "User", 
            required: true, 
            unique: true 
        },
        items: { 
            type: [CartItemSchema], 
            default: [] 
        },
    },
    {
        timestamps: true,
    }
);

export const Cart = mongoose.model<ICart>("Cart", CartSchema);
