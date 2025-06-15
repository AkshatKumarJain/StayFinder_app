import { User } from "../models/user.model.js";
import { Listing } from "../models/listings.model.js";

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