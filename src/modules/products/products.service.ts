import { TProducts } from "./products.interface";
import { Products } from "./products.model";

const createProducts = async (payload: TProducts) => {
  const result = await Products.create(payload);
  return result;
};

const getAllPoducts = async () => {
  const result = await Products.find();
  return result;
};
const getPoductById = async (id: string) => {
  const result = await Products.findOne({ _id: id });
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Products.deleteOne({ _id: id });
  return result;
};

const updateProductById = async (
  id: string,
  updateData: Partial<TProducts>
) => {
  const result = await Products.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const searchProducts = async (searchTerm: string): Promise<TProducts[]> => {
  const result = await Products.find({
    $or: [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
    ],
  });
  return result;
};

export const ProductServices = {
  createProducts,
  getAllPoducts,
  getPoductById,
  updateProductById,
  deleteProduct,
  searchProducts,
};
