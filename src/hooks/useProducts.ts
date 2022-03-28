import { useContext } from 'react'
import ProductContext from '../contexts/Product/context'

const useProductsContext = () => {

    const {
        product,
        products,
        getAllProducts,
        selectedProduct,
        deletedProduct,
        newProduct,
        saveProduct
    } = useContext(ProductContext);

    return {
        product,
        products,
        getAllProducts,
        selectedProduct,
        deletedProduct,
        newProduct,
        saveProduct
    }
}

export default useProductsContext