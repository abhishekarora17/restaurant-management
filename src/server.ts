import app from "./app";

import connectDB from "./config/db";
import { ENV } from "./config/env";

const startServer = async () => {
    try {
        await connectDB();

        app.listen(ENV.PORT, () => {
            console.log(`Server running on port ${ENV.PORT}`);
        });
    } catch (error) {
        console.error("Server startup aborted because the database connection failed.");
        process.exit(1);
    }
}  

startServer();  
