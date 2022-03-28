import { useEffect } from "react";
import Button from "../../components/Button";
import { PlusIcon } from "../../components/Icons";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import useProductsContext from "../../hooks/useProducts";

export default function Products() {

  const {
    products,
    getAllProducts,
    newProduct,
    deletedProduct,
    selectedProduct,
  } = useProductsContext()

  useEffect(() => {
    getAllProducts()
  }, [getAllProducts])

  return (
    <Layout title="Produtos">
      <div className="flex justify-end">
        <Button
          className="mb-4"
          color='emerald'
          onClick={newProduct}
        >
          <div className="flex">
            {PlusIcon}
            Novo produto
          </div>
        </Button>
      </div>
      <Table
        products={products}
        selectedProduct={selectedProduct}
        deletedProduct={deletedProduct}
      />
    </Layout>
  )
}
