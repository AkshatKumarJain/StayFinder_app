import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundUser = await User.findOne({email});
        if(foundUser)
        {
            const isCorrect = await bcrypt.compare(password, foundUser.password);
            console.log(isCorrect);
            if(isCorrect)
            {
                const token = jwt.sign({userId: User._id}, process.env.JWT_SECRET, {expiresIn: "1h"})
                res.status(200).json({
                message: "User found", token,
                data: foundUser
                })
            }
            else
            {
                res.    status(401).json({
                    message: "email or password is wrong"
                })
            }
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