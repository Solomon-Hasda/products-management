import { Request, Response } from "express";
import { OrderServices } from "./orders.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await OrderServices.createOrder(data);
    res.json({
      success: true,
      massage: "Your order has been created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrders();
    res.json({
      success: true,
      massage: "Your orders are Retrieve successfully",
      data: {result},
    });
  } catch (err) {
    console.log(err);
  }
};

const searchByEmail = async (req: Request, res: Response) => {
    try {
      const { email } = req.query;
      if (!email) {
        return res.status(400).json({
          success: false,
          message: "please provide a valid email existing address",
        });
      }
  
      const ordererEmails = await OrderServices.searchByEmail(email.toString());
      res.status(200).json({
        success: true,
        message: "Products retrieved successfully!!",
        data: ordererEmails
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        data: err
      });
    }
  };

export const orderController = {
  createOrder,
  getAllOrders,
  searchByEmail
};
