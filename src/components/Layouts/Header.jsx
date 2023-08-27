import Button from "../Elements/Button/index"

const navItems = [
    {
        label: "Program",
        icon: <i className="ri-arrow-down-s-line"></i>,
        url: "#"
    },
    {
        label: "Bidang Ilmu",
        icon: <i className="ri-arrow-down-s-line"></i>,
        url: "#"
    },
    {
        label: "Tentang Edpsert",
        url: "#"
    }
]

const Header = () => {
    return (
        <div className="fixed w-full h-[45px] bg-[#152A46] inset-0 px-[120px] py-[55px] text-white flex justify-between items-center z-50">
            <h1 className="text-[20px] font-bold">LOGO</h1>
            <nav className="flex items-center gap-x-14">
                <ul className="flex gap-5 text-[14px]">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} className="flex items-center gap-1">{item.label}{item.icon}</a>
                        </li>
                    ))}
                </ul>
                <Button>Masuk/Daftar</Button>
            </nav>

        </div>
    )
}

export default Header