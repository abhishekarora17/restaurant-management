import mongoose, { Schema, Types } from "mongoose";

export interface IWishlist {
    user: Types.ObjectId;
    menus: Types.ObjectId[];
}

const WishlistSchema = new Schema<IWishlist>(
    {
        user: { 
            type: Schema.Types.ObjectId, 
            ref: "User", 
            required: true, 
            unique: true 
        },
        menus: [
            { 
                type: Schema.Types.ObjectId, 
                ref: "Menu" 
            }
        ],
    },
    {
        timestamps: true,
    }
);

export const Wishlist = mongoose.model<IWishlist>("Wishlist", WishlistSchema);
