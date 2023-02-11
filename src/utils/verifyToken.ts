import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.access_token as string;

    if (!token) {
        res.status(401).send("Token missing.");
        return;
    }

    try {
        jwt.verify(token, process.env.JWT as string);
        next();
    } catch (err) {
        res.status(403).send("Invalid token");
        return;
    }
}

export default verifyToken;