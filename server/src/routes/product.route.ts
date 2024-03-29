import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import { ProductService } from "../services/product.service";
import { ProductRepository } from "../repositories/product.repository";

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

const productRouter = Router();

productRouter.post("/", productController.create);
productRouter.get("/", productController.findAll);
productRouter.get("/:id", productController.findById);

export default productRouter;
