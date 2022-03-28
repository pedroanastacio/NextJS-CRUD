/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";
import ProductCollection from "../../backend/database/ProductCollection";
import ProductRepository from "../../core/Product/ProductRepository";
import Product from "../../core/Product/Products";
import ProductContext from "./context";

interface ProductProviderProps {
    children: ReactNode
}

const ProductProvider = (props: ProductProviderProps) => {
    
    const repository: ProductRepository = useMemo(() => new ProductCollection(), [])
    const router = useRouter()
    const [products, setProducts] = useState<Product[]>([])
    const [product, setProduct] = useState<Product>(Product.empty())

    const getAllProducts = useCallback(async () => {
        const products = await repository.getAll()
        setProducts(products)
        router.push('/products')
    }, [repository])

    const selectedProduct = (product: Product) => {
        setProduct(product);
        router.push(`/products/${product.id}`)
    }

    const deletedProduct = async (product: Product) => {
        await repository.delete(product)
        getAllProducts()
    }

    const newProduct = () => {
        setProduct(Product.empty())
        router.push('/products/create')
    }

    const saveProduct = async (product: Product) => {
        await repository.save(product)
        getAllProducts()
    }

    const contextValue = useMemo(() => ({
        product,
        products,
        getAllProducts,
        selectedProduct,
        deletedProduct,
        newProduct,
        saveProduct
    }), [product, products]);

    return (
		<ProductContext.Provider value={contextValue}>
			{props.children}
		</ProductContext.Provider>
	);
}

export default ProductProvider

