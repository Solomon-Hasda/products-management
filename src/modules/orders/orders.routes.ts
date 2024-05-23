import express, { Request, Response } from 'express';
import { orderController } from './orders.controllers';

const route = express.Router();

route.post("/", orderController.createOrder);
route.get("/", orderController.getAllOrders);
route.get("/api/orders?email", orderController.searchByEmail);

export const orderRoutes = route