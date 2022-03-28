import { useState } from "react"
import Product from "../../core/Product/Products"
import PriceInput from "./PriceInput"
import Input from "./Input"
import Button from "../Button"
import { CancelIcon, EditIcon, SaveIcon } from "../Icons"

interface FromProps {
    product?: Product
    onSubmit: (product: Product) => void
    onCancel: () => void
}

const Form = (props: FromProps) => {
    const id = props.product?.id
    const [name, setName] = useState<string>(props.product?.name ?? '');
    const [price, setPrice] = useState<number>(props.product?.price ?? 0);

    return (
        <div className="bg-slate-100 p-4 rounded-md">
            {id ? <Input label="Código" value={id} readOnly /> : false}
            <Input
                label="Nome"
                value={name}
                placeholder="Digite o nome do produto"
                onChange={setName}
            />
            <PriceInput
                label="Preço"
                value={price}
                placeholder="Digite o preço do produto"
                onChange={setPrice}
            />
            <div className="flex flex-col items-center mt-7 sm:flex-row sm:justify-end">
                <Button
                    className="mb-2 max-w-xs w-full sm:mr-2 sm:mb-0 sm:max-w-fit"
                    onClick={() => props.onSubmit(new Product(name, price, id))}
                >
                    <div className="flex justify-center">
                        {id ? <>{EditIcon('2', 1)} Editar</> : <>{SaveIcon} Salvar</>}
                    </div>
                </Button>
                <Button
                    className="max-w-xs w-full sm:max-w-fit"
                    color="slate"
                    onClick={props.onCancel}
                >
                    <div className="flex justify-center">
                        {CancelIcon}
                        Cancelar
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default Form