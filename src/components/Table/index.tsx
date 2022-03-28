import Product from "../../core/Product/Products"
import { toReal } from "../../helpers/currency"
import { EditIcon, TrashIcon } from "../Icons"
import ActionBtn from "./ActionBtn"

interface TableProps {
    products: Product[]
    selectedProduct?: (product: Product) => void
    deletedProduct?: (product: Product) => void
}

const Table = (props: TableProps) => {

    const showActions = props.selectedProduct || props.deletedProduct

    const renderTableHeader = () => {
        return (
            <tr className={`
                bg-gradient-to-r from-emerald-500 to-emerald-600 
            `}>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Preço</th>
                {showActions ? <th className="text-center p-4">Ações</th> : false}
            </tr>
        )
    }

    const renderActions = (product: Product) => {
        return (
            <td className="flex justify-center">
                {
                    props.selectedProduct ?
                        <ActionBtn
                            action={() => { props.selectedProduct(product) }}
                            color='emerald'
                        >
                            {EditIcon()}
                        </ActionBtn>
                        : false
                }
                {
                    props.deletedProduct ?
                        <ActionBtn
                            action={() => { props.deletedProduct(product) }}
                            color='red'
                        >
                            {TrashIcon}
                        </ActionBtn>
                        :
                        false
                }

            </td>
        )
    }

    const renderData = () => {
        return props.products?.map((product, i) => {
            return (
                <tr
                    key={product.id}
                    className={`${i % 2 === 0 ? 'bg-slate-200' : 'bg-slate-100'}`}
                >
                    <td
                        data-th="Código"
                        className="text-left p-4 flex flex-col before:content-[attr(data-th)]
                            first:before:font-bold md:table-cell md:before:content-none"
                    >
                        {product.id}
                    </td>
                    <td
                        data-th="Nome"
                        className="text-left p-4 flex flex-col before:content-[attr(data-th)] 
                            even:before:font-bold md:table-cell md:before:content-none"
                    >
                        {product.name}
                    </td>
                    <td
                        data-th="Preço"
                        className="text-left p-4 flex flex-col before:content-[attr(data-th)] 
                            odd:before:font-bold md:table-cell md:before:content-none"
                    >
                        {toReal(product.price)}
                    </td>
                    {showActions ? renderActions(product) : false}
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-md overflow-hidden text-slate-600">
            <thead className="text-slate-50 hidden md:table-header-group">
                {renderTableHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}

export default Table