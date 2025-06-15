import { User } from "../models/user.model.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundUser = await User.findOne({email, password});
        if(foundUser)
        {
            res.status(200).json({
                message: "User found",
                data: foundUser
            })
        }
        else
        {
            res.status(400).json({
                message: "user not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}