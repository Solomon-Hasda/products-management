import { TOrders } from "./orders.interface";
import { Order } from "./orders.model";

const createOrder = async (payload : TOrders) =>{
    const result = await Order.create(payload);
    return result;
}
const getAllOrders = async () =>{
    const result = await Order.find();
    return result;
}

const searchByEmail = async (email: string): Promise<TOrders[]> => {
    const result = await Order.find({
      $or: [
        { name: { $regex: email, $options: "i" } },
        { description: { $regex: email, $options: "i" } },
      ],
    });
    return result;
  };

export const OrderServices = {
    createOrder,
    getAllOrders,
    searchByEmail
}