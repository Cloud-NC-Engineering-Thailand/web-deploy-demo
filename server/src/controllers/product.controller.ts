import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import { IProduct } from "../models/product.model";

export class ProductController {
    private productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }

    create = async (req: Request, res: Response): Promise<void> => {
        try {
            const newProduct = await this.productService.create(
                req.body as IProduct
            );
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({
                error: error || "Unknown error occurred",
            });
        }
    };

    findAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const products = await this.productService.findAll();
            res.json(products);
        } catch (error) {
            res.status(500).json({
                error: error || "Unknown error occurred",
            });
        }
    };

    findById = async (req: Request, res: Response): Promise<void> => {
        try {
            const product = await this.productService.findById(req.params.id);
            if (!product) {
                res.status(404).json({ error: "Product not found" });
            }
            res.json(product);
        } catch (error) {
            res.status(500).json({
                error: error || "Unknown error occurred",
            });
        }
    };
}
