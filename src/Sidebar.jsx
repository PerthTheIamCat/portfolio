const Sidebar = ({open}) => {
    

    return (
    <>
        <div className={`fixed top-10 right-0 bg-white bg-opacity-50 w-[20vw] h-full ${open ? 'translate-x-0': 'translate-x-full'} ease-in-out duration-500`}>
            <div>
                <h1>
                    Hello World
                </h1>
            </div>
        </div>
    </>
    )
}
export default Sidebar