import Title from "./Title"

interface LayoutProps {
    title: string
    children: any
    className?: string
}

const Layout = (props: LayoutProps) => {
    return (
        <div className={`
            flex min-h-screen justify-center items-center 
            bg-gradient-to-br from-fuchsia-700 to-emerald-700
            text-gray-200 p-2 sm:p-4
        `}
        >
            <div className={`
                flex flex-col w-full max-w-5xl
                bg-white text-gray-800
                rounded-md ${props.className}
            `}
            >
                <Title>
                    {props.title}
                </Title>
                <div className="p-6">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout