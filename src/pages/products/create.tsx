import Form from "../../components/Form"
import Layout from "../../components/Layout"
import { useRouter } from "next/router"
import useProductsContext from "../../hooks/useProducts"

const CreateProduct = () => {

    const router = useRouter()
    const {
        product,
        saveProduct
    } = useProductsContext()

    return (
        <Layout title="Novo Produto" className="!max-w-xl">
            <Form
                product={product}
                onSubmit={saveProduct}
                onCancel={() => router.push("/products")}
            />
        </Layout>
    )
}

export default CreateProduct