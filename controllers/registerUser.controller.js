import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"

export const createUser = async (req, res) => {
    const {email} = req.body;
    const findUser = await User.findOne({email});
    if(findUser)
    {
        res.status(400).json({
            message: "User already exists"
        })
    }
    else
    {
        try {
            const { firstName, lastName, email, phoneNumber, address, password, confirmPassword } = req.body;
            if(phoneNumber.length==10)
            {
                const saltRounds = 10;
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    bcrypt.hash(password, salt, async (err, hash) => {
                        const createdUser = await User.create({firstName, lastName, email, phoneNumber, address, password: hash, confirmPassword: hash});
                        res.status(201).json({
                        message: "User created successfully",
                        data: createdUser
                        })
                    })
                })
            }
            else 
            {
                res.status(400).json({
                    message: "please give correct phone number"
                })
            }

        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }
}