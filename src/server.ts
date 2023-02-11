import express, { Request, Response } from 'express';
import user from "./routes/api/user";
import product from './routes/api/product';
import orders from './routes/api/orders';

const app: express.Application = express();
const address: string = "0.0.0.0:3000";

app.use(express.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.use('/api/user', user)
app.use("/api/product", product);
app.use("/api/orders", orders);

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

export default app;