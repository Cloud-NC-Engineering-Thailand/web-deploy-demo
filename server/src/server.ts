import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import productRouter from "./routes/product.route";

dotenv.config();
const app: Application = express();

app.use(cors());
app.use(express.json());

// Database connection
const connectToDatabase = async () => {
    try {
        const mongoDB = process.env.MONGODB_URI as string;
        await mongoose.connect(mongoDB);
        console.log("Connected to MongoDB Atlas using Mongoose!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
connectToDatabase();

// Use the product routes
app.use("/api/products", productRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
