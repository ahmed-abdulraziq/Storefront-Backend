import { Request, Response } from "express"
import { Completed, Create, CreateOrderProduct, Index } from "../models/orders";
import { Order } from "../type/order";
import { OrderProduct } from "../type/orderProduct";

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const order: Order = {
            user_id: req.body.user_id as string,
            status:  req.body.status as string,
        };
        
        const data = await Create(order);

        res.status(200).json(data);
    } catch (err) {
        res.status(500).send('Error occured processing the data');
    }
}

export const createOrderProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const OrderProduct: OrderProduct = {
            product_id: req.body.product_id as string,
            order_id:  req.body.order_id as string,
            quantity: req.body.quantity as number,
        };
        
        const data = await CreateOrderProduct(OrderProduct);

        res.status(200).json(data);
    } catch (err) {
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