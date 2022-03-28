interface InputProps {
    label: string
    type?: 'text' | 'number'
    placeholder?: string
    value: any
    readOnly?: boolean
    onChange?: (value: any) => void
}

const Input = (props: InputProps) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-1 text-slate-600 font-semibold">
                {props.label}
            </label>
            <input
                type={props.type ?? 'text'}
                readOnly={props.readOnly}
                placeholder={props.placeholder || ''}
                value={props.value}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                border border-emerald-500 rounded-lg
                focus:outline-none bg-white px-4 py-2
                ${props.readOnly ? 'bg-slate-50' : ''}
                text-slate-500
            `}
            />
        </div>
    )
}

export default Input