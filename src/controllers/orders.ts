import { Request, Response } from "express"
import { Completed, Create, Index } from "../models/orders";
import { Order } from "../type/order";

export const create = async (req: Request, res: Response): Promise<void> => {
    try {

        const order: Order = {
            product_id: req.body.product_id as number,
            quantity:  req.body.quantity as number,
            user_id: req.body.user_id as number,
            status:  req.body.status as string,
        };
        
        const data = await Create(order);

        res.status(200).json(data);
    } catch (err) {
        console.log(err)
        res.status(500).send('Error occured processing the data');
    }
}

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