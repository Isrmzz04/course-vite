import { Link } from "react-router-dom";
import Button from "../Elements/Button/index";

const navItems = [
  {
    label: "Program",
    icon: <i className="ri-arrow-down-s-line"></i>,
    url: "#",
  },
  {
    label: "Bidang Ilmu",
    icon: <i className="ri-arrow-down-s-line"></i>,
    url: "#",
  },
  {
    label: "Tentang Edpsert",
    url: "#",
  },
];

const Header = () => {
  return (
    <div className="fixed w-full h-fit lg:h-[45px] bg-[#152A46] inset-0 px-[5%] lg:px-[120px] py-[25px] lg:py-[55px] text-white flex justify-between lg:items-center z-50">
      <Link to="/">
        <h1 className="text-[20px] font-bold">LOGO</h1>
      </Link>

      <nav className="lg:flex items-center gap-x-14 hidden">
        <ul className="flex gap-5 text-[14px]">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="flex items-center gap-1">
                {item.label}
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <Button>Masuk/Daftar</Button>
      </nav>
      {/* Mobile Breakpoint */}
      <details className="relative lg:hidden">
        <summary className="flex justify-end cursor-pointer">
          <div className="w-fit">
            <i className="ri-menu-3-line text-2xl"></i>
          </div>
        </summary>
        <ul className="space-y-1 absolute bg-white mt-4 right-0 min-w-[200px] px-2 py-3 rounded-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-black/80"
              >
                {item.label}
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default Header;
