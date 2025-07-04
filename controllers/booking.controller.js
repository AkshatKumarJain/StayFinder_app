import { User } from "../models/user.model.js";
import { Listing } from "../models/listings.model.js";
import { Booking } from "../models/booking.model.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

export const booking = async (req, res) => {
    try {
        const {listingId, userId, startDate, endDate} = req.body;
        const foundListing = await Listing.findOne({_id: listingId});
        // console.log(foundListing);
        if(foundListing)
        {
            if(startDate<Date.now() || endDate<startDate)
            {
                return res.status(404).json({
                    message: "Please select correct date"
                })
            }
            const available = foundListing.Availibility;
            if(available==="Not available")
            {
                return res.status(404).json({
                    message: "Already booked"
                })
            }
            await Booking.create({ listingId, userId, startDate, endDate });
            if(Date.now()<=startDate && Date.now()>=endDate && Availibility==="Not available")
            {
                await Listing.updateOne({_id: listingId}, {$set: {Availibility: "Available"}});
            }
            await Listing.updateOne({_id: listingId}, {$set: {Availibility: "Not available"}});
            res.status(201).json({
                message: "place booked successfully",
                data: foundListing
            })
        }
        else
        {
            res.status(400).json({
                message: "booking Failed"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

export const cancelBooking = async (req, res) => {
    try {
        const {id} = req.body;
        const findBooking = await Booking.findById(id); 
        // console.log(findBooking);
        if(findBooking)
        {
            if(Date.now()>findBooking.endDate)
            {
                return res.status(400).json({
                    message: "cannot cancel booking"
                })
            }
            const listingId = findBooking.listingId;
            await Booking.deleteOne({ _id: id });
            await Listing.updateOne({_id: listingId}, {$set: {Availibility: "Available"}});
            res.status(200).json({
                message: "booking canceled"
            })
        }
        else
        {
            res.status(400).json({
                message: "You have no bookings"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"error", error
        })
    }
}