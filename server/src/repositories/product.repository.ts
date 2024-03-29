import { IProduct, Product } from "../models/product.model";

export class ProductRepository {
    async findAll(): Promise<IProduct[]> {
        return Product.find();
    }

    async findById(id: string): Promise<IProduct | null> {
        return Product.findById(id);
    }

    async create(data: IProduct): Promise<IProduct> {
        const newProduct = new Product(data);
        return newProduct.save();
    }
}
