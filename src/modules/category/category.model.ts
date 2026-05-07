import mongoose, { Schema } from "mongoose";

export interface ICategory {
    name: string;
    description?: string;
    isActive?: boolean;
}

const CategorySchema = new Schema<ICategory>(
    {
        name: { 
            type: String,
            required: true,
            unique: true, 
            trim: true
        },
        description: { 
            type: String,
            default: ""
        },
        isActive: { 
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
    }
);

export const Category = mongoose.model<ICategory>("Category", CategorySchema);
