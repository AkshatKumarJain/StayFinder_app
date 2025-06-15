import { jwt } from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader)
    {
        res.status(401).json({
            message: "Access denied. No token found"
        })
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}