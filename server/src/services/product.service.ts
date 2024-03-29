import { IProduct } from "../models/product.model";
import { ProductRepository } from "../repositories/product.repository";

export class ProductService {
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    async findAll(): Promise<IProduct[]> {
        return this.productRepository.findAll();
    }

    async findById(id: string): Promise<IProduct | null> {
        return this.productRepository.findById(id);
    }

    async create(productData: IProduct): Promise<IProduct> {
        return this.productRepository.create(productData);
    }
}
