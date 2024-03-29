import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
});

export const User = model("User", userSchema);
