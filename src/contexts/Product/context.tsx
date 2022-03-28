import { createContext } from "react"
import Product from "../../core/Product/Products"

interface ProductContextProps {
    product: Product
    products: Product[]
    getAllProducts: () => void
    selectedProduct: (product: Product) => void
    deletedProduct: (product: Product) => void
    newProduct: () => void
    saveProduct: (product: Product) => void
}

const ProductContext = createContext<ProductContextProps>({
    product: Product.empty(),
    products: [],
    getAllProducts: () => {},
    selectedProduct: () => {},
    deletedProduct: () => {},
    newProduct: () => {},
    saveProduct: () => {}
})

export default ProductContext
