import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader)
    {
        return res.status(401).json({
            message: "Access denied. No token found"
        })
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}