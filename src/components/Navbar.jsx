import ItemAnim from './ItemAnim'

function Navbar() {
    const items = [
        "Services",
        "Our Work",
        "About us",
        "Insight",
        "Contact us",
    ]

    return (
        <nav className='fixed flex items-center justify-between top-0 w-full h-30 px-24 py-5'>
            <div className="logo font-bold text-3xl">
                <h1>Ochi</h1>
            </div>
            <div className='flex gap-5 font-normal cursor-pointer relative'>
                {items.map((elem,i )=>{
                    return <div className={i === 4 && "pl-32 font-semibold"}>
                                <ItemAnim name={elem}/>
                            </div>
                })}
            </div>
        </nav>
    )
}

export default Navbar
