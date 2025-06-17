import mongoose from "mongoose"
import { connectDB } from "../connection.js";


await connectDB();

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "NA"
    },
    price: {
        type: Number
    },
    location: [
        {
            houseAddress:{
                type: String,
                required: true
            },
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
    hostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    image: {
        type: String,
        required: true
    },
    Availibility: {
        type: String,
        enum: ["Available", "Not available"]
    }
}, {timestamps: true})

export const Listing = mongoose.model("Listing", listingSchema);