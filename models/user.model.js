import mongoose from "mongoose";
import { connectDB } from "../connection.js";
import { size } from "zod/v4";

await connectDB();

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    address: [
        {
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true
            }
        }
    ],
    password: {
        type: String,
        required: true,
        min: [6, "password must be of at least 6 characters."],
        max: [15, "password cannot exceed 15 characters."]
    },
    confirmPassword: {
        type: String,
        required: true
    },
    favourites: {
        type: Boolean
    },
    bookings: {
       type: Array,
       default: [] 
    },
    role: {
        type: String,
        enum: ["guest", "Host"],
        default: "guest",
        required: true
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema);