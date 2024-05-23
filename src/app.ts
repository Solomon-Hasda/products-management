import express, { Request, Response } from "express";
import { ProductsRoutes } from "./modules/products/products.route";
import cors from "cors"
import { orderRoutes } from "./modules/orders/orders.routes";
const app = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductsRoutes)
app.use('/api/orders', orderRoutes )

app.get("/", (req: Request, res: Response) => {
  res.send("Hello developers");
});

export default app;
