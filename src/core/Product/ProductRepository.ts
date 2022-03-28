import Product from "./Products"

export default interface ProductRepository {
    save(product: Product): Promise<Product>
    delete(product: Product): Promise<void>
    getAll(): Promise<Product[]>
}