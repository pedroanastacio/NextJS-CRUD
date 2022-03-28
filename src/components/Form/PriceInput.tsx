import CurrencyInput from 'react-currency-input-field';

interface CurrencyInputProps {
    label: string
    placeholder?: string
    value: number
    onChange?: (value: any) => void
}

const PriceInput = (props: CurrencyInputProps) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-1 text-slate-600 font-semibold">
                {props.label}
            </label>
            <CurrencyInput
                placeholder={props.placeholder}
                intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                disableGroupSeparators={true}
                decimalScale={2}
                value={props.value}
                className={`
                    border border-emerald-500 rounded-lg
                    focus:outline-none bg-white px-4 py-2
                    text-slate-500
                `}
                onValueChange={(_, __, e) => props.onChange(e.value)}
            />
        </div>
    )
}

export default PriceInput