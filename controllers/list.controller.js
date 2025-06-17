import { User } from "../models/user.model.js";
import { Listing } from "../models/listings.model.js";
import mongoose from "mongoose";
import { verifyToken } from "../middlewares/auth.middleware.js";

// get list of all places. will be displayd on dashboard.
export const getList = async (req, res) => {
    try {
        const list = await Listing.find({});
        res.status(200).json({
            message: "successful fetch list",
            data: list
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

// user can search on the basis of id.
export const getListById = async (req, res) => {
    try {
        const id = req.params;
        const listById = await Listing.findOne({ id });
            res.status(200).json({
                message: "successful fetch data",
                data: listById
            })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

// only host can post a hosting place.
export const postPlace = async (req, res) => {
    try {
            const {title, description, price, location, image, Availibility} = req.body;
            // const hostId = req.user.userId;
            const findUser = await User.findById(req.user.userId);
            if(!findUser)
            {
                return res.status(404).json({
                    message: "User not found"
                })
            }
            const postList = await Listing.create({ title, description, price, location, image, Availibility, hostId: findUser._id});
            res.status(201).json({
                message: "place added successfully",
                data: postList
            })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}