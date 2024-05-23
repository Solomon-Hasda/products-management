import express from 'express';
import { ProductController } from './products.controller';

const routes = express.Router();

routes.post("/", ProductController.createProduct);
routes.get("/", ProductController.getProducts);
routes.get("/:productId", ProductController.getProductById);
routes.put("/:productId", ProductController.updateProduct);
routes.delete("/:productId", ProductController.deleteProduct);
routes.get("/api/products?searchTerm", ProductController.searchProducts);



export const ProductsRoutes = routes