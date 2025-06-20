import { User } from "../models/user.model.js";
import { Listing } from "../models/listings.model.js";
import { Booking } from "../models/booking.model.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import mongoose from "mongoose";

export const filterByCity = async (req, res) => {
    try {
        const { loc } = req.query;
        console.log(loc);
        const getListByLocation = await Listing.find({ "location.city": { $regex: loc, $options: "i" } });
        console.log(getListByLocation);
        if(getListByLocation)
        {
            res.status(200).json({
                message: "Found",
                data: getListByLocation
            })
        }
        else
        {
            res.status(200).json({
                message: "Not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}