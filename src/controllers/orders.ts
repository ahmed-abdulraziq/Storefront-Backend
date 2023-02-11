import { Request, Response } from "express"
import { Completed, Index } from "../models/orders";

export const index = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id as string)
        const orders = await Index(id);
        
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).send('Error occured processing the data');
    }
}
export const completed = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id as string)
        const orders = await Completed(id);
        
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).send('Error occured processing the data');
    }
}