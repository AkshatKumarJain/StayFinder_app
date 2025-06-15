import mongoose from "mongoose"
import { connectDB } from "../connection.js";


await connectDB();

const bookingSchema = mongoose.Schema({
    userId: {       
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    listingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
}, { timestamps: true })

export const Booking = mongoose.model("Booking", bookingSchema);