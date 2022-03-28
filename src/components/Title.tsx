const Title = ({ children }) => {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl text-fuchsia-700 font-semibold">
                {children}
            </h1>
            <hr className="border-2 border-fuchsia-700"/>
        </div>
    )
}

export default Title