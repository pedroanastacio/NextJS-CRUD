interface ButtonProps {
    color?: 'emerald' | 'fuchsia' | 'slate' | 'blue',
    type?: 'button' | 'submit'
    className?: string,
    children: any
    onClick?: () => void
}

const Button = (props: ButtonProps) => {
    const color = props.color ?? 'blue'

    return (
        <button
            onClick={props.onClick}
            type={props.type ?? 'button'}
            className={`
            bg-gradient-to-r from-${color}-500 to-${color}-600
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}
        >
            {props.children}
        </button>
    )
}

export default Button