import { Request, Response } from "express"
import bcrypt from "bcrypt"
import { Index, Show, Create } from "../models/user"
import { User } from "../type/user";
import jwt from "jsonwebtoken";

export const index = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await Index();
        
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send('Error occured processing the data');
    }
}

export const show = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const user = await Show(id);

        res.status(200).json(user);
    } catch (err) {
        res.status(500).send('Error occured processing the data');
    }
}

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = bcrypt.hashSync(req.body.password,  salt);

        const user = {
            first_name: req.body.firstname as string,
            last_name: req.body.lastname as string,
            password: hash as string,
        };
        
        const data = await Create(user);

        const token = jwt.sign(data.id.toString(), process.env.JWT as string);
        
        res.header("access_token", token);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send('Error occured processing the data');
    }
}