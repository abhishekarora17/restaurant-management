import dotenv from "dotenv";

dotenv.config();

const DEFAULT_MONGO_URI = "mongodb://127.0.0.1:27017/restaurant-app";

export const ENV = {
    PORT: process.env.PORT ?? "5000",
    MONGO_URI: process.env.MONGO_URI ?? DEFAULT_MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    NODE_ENV: process.env.NODE_ENV ?? "development"
};
