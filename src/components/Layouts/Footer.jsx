/* eslint-disable react/no-unknown-property */
import circleFooter from "../../assets/images/circle-footer.png"
const Footer = () => {
  const footerLink = [
    {
      title: "Program",
      subtitle: ["Online Course", "Mini Bootcamp", "Bootcamp"]
    },
    {
      title: "Bidang Ilmu",
      subtitle: ["Digital marketing", "Product management", "English", "Programming"]
    },
    {
      title: "Tentang edspert",
      subtitle: ["Bantuan", "Kontak kami", "Media sosial"]
    },
  ]

  return (
    <footer className="text-[#A3A3A3] body-font min-h-[536px] relative">
      <img src={circleFooter} alt="" className="absolute right-0 bottom-0" />
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
            <span className="text-lg text-[#A3A3A3]">TAGLINE Edspert disini</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
        </div>
        <div className="flex flex-col flex-grow md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left gap-y-10">
          <div className="flex-grow flex flex-wrap justify-end z-10">
            {footerLink.map((list, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-[700] text-black tracking-tight mb-3">{list.title}</h2>
                <nav className="list-none mb-10">
                  {list.subtitle.map((v, i) => (
                    <li key={i}>
                      <a className="text-[#A3A3A3] hover:text-gray-800 text-sm lg:text-md" href="#">{v}</a>
                    </li>
                  ))}
                </nav>
              </div>
            )
            )}
          </div>
          <div className="">
            <p className="text-[#A3A3A3] text-sm text-center lg:-ml-[105px]">
              Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.
            </p>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer