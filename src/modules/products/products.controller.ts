import { Request, Response } from "express";
import { ProductServices } from "./products.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.createProducts(req.body);
    res.status(200).json({
      success: true,
      massage: "product created successfully!!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      massage: "something went wrong",
      data: err,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllPoducts();
    res.status(200).json({
      success: true,
      massage: "product created successfully!!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      massage: "something went wrong",
      data: err,
    });
  }
};
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getPoductById(productId);
    res.status(200).json({
      success: true,
      massage: "your product is retrieved successfully!!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      massage: "something went wrong",
      data: err,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    const updatedProduct = ProductServices.updateProductById(
      productId,
      updateData
    );
    res.status(200).json({
      success: true,
      massage: "your product is updated successfully!!",
      data: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      massage: "something went wrong",
      data: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result =  await ProductServices.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!!",
      data : result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err
    });
  }
};

const searchProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    if (!searchTerm) {
      return res.status(400).json({
        success: false,
        message: "please provide a search term",
      });
    }

    const products = await ProductServices.searchProducts(searchTerm.toString());
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully!!",
      data: products
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err
    });
  }
};


export const ProductController = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts
};
