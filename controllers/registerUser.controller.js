import { User } from "../models/user.model.js";

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
            const createdUser = await User.create({firstName, lastName, email, phoneNumber, address, password, confirmPassword});
            
            res.status(201).json({
                message: "User created successfully",
                data: createdUser
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }
}