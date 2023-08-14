const navItems = [
    {
        label: "Menu 1",
        url: "#"
    },
    {
        label: "Menu 2",
        url: "#"
    },
    {
        label: "Menu 3",
        url: "#"
    }
]

const Header = () => {
    return (
        <div className="w-full h-16 bg-blue-900 text-white flex justify-between items-center lg:px-[10%]">
            <h1 className="text-[20px] font-bold">Header</h1>
            <nav>
                <ul className="flex gap-5">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Header