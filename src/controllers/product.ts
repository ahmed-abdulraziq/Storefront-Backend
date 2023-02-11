import { Request, Response } from "express"
import { Create, Index, Show } from "../models/product";
import { Product } from "../type/product";

export const index = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Index();
        
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send('Error occured processing the data');
    }
}

export const show = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const product = await Show(id);

        res.status(200).json(product);
    } catch (err) {
        res.status(500).send('Error occured processing the data');
    }
}

export const create = async (req: Request, res: Response): Promise<void> => {
    try {

        const product: Product = {
            name: req.body.name as string,
            price: req.body.price as number,
            category:  req.body.category as number,
        };
        
        const data = await Create(product);

        res.status(200).json(data);
    } catch (err) {
        res.status(500).send('Error occured processing the data');
    }
}