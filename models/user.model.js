// import { connectDB } from "../connection.js";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema);