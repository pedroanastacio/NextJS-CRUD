interface ActionBtnProps {
    children: any,
    color?: 'red' | 'emerald' | 'blue',
    action: () => void
}

const ActionBtn = (props: ActionBtnProps) => {
    const color = props.color ?? 'blue'

    return (
        <button
            onClick={props.action}
            className={`
                flex justify-center items-center
                p-2 m-1 hover:bg-white
                rounded-full text-${color}-600
            `}
        >
            {props.children}
        </button>
    )
}

export default ActionBtn