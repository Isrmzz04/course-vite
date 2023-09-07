import { Link } from "react-router-dom"
import imageOrder from "../../assets/images/img-order.png"
import { toIdr } from "../utils/toIdr"

const Order = ({ value }) => {
    const kodeUnik = 100000
    let getDiscount = value.price - value.discount
    let amount = getDiscount - kodeUnik

    return (
        <div className="bg-white w-full shadow-sm shadow-slate-500/30 rounded-[20px] py-8 px-8 lg:px-10">
            <h2 className="text-[18px] font-[600] text-[#131313] mb-5">Ringkasan Pesanan</h2>
            <div className="flex overflow-hidden gap-4 lg:gap-0">
                <div className="w-1/3 bg-cover">
                    <img src={imageOrder} alt="" />
                </div>

                <div className="w-2/3 md:-ml-20 lg:-ml-5">
                    <div className="space-y-1">
                        <h2 className="font-semibold text-md lg:text-[18px]">{value.title}</h2>
                        <h3 className="font-semibold text-sm lg:text-[15px]">{value.description}</h3>
                    </div>
                    <div className="mt-3 hidden md:block lg:block">
                        <ul className="space-y-1">
                            <li className="text-black/50 text-sm">Batch <span className="text-black ml-5">{value.batch}</span></li>
                            <li className="text-black/50 text-sm">Mentor <span className="text-black ml-3">{value.mentor}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-5 block md:hidden lg:hidden">
                <ul className="space-y-1">
                    <li className="text-black/50 text-sm">Batch <span className="text-black ml-5">{value.batch}</span></li>
                    <li className="text-black/50 text-sm">Mentor <span className="text-black ml-3">{value.mentor}</span></li>
                </ul>
            </div>
            <div className="mt-5">
                <span className="font-[600]">Kode Promo</span>
                <div className="flex mt-2 -ml-2 gap-2 justify-between">
                    <input type="text" className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 placeholder:text-xs lg:placeholder:text-md" placeholder="Masukan Kode Promo" />

                    <button className="px-4 py-2 text-xs md:text-sm lg:text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#2A61A8] rounded-md sm:mx-2 hover:bg-[#2A61A8] focus:outline-none focus:bg-[#2A61A8]/90">
                        Terapkan
                    </button>
                </div>
            </div>
            <div className="mt-5 space-y-1">
                <span className="font-[600]">Metode Pembayaran</span>
                <p className="text-sm lg:text-md">Bank Transfer (verifikasi manual)-Mandiri</p>
            </div>
            <div className="mt-5">
                <span className="font-[600]">Ringkasan Pembayaran</span>
                <ul className="space-y-5 mt-3 text-sm lg:text-md">
                    <li className="flex items-center justify-between">
                        <span>Harga Kelas</span>
                        <span>{toIdr(value.price)}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span>Potongan</span>
                        <span>{toIdr(getDiscount)}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span>Promo</span>
                        <span>-</span>
                    </li>
                    <li className="flex items-center justify-between border-b pb-5">
                        <span>Kode Unik</span>
                        <span>{toIdr(kodeUnik)}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span className="font-[600]">Total Pembayaran</span>
                        <span>{toIdr(amount)}</span>
                    </li>
                </ul>
            </div>
            <p className="mt-20 text-sm">
                Dengan menekan tombol <b>Bayar</b> kamu telah menyetujui syarat dan ketentuan yang berlaku, silahkan baca kembali <span className="text-[#1097E7] underline">Syarat & ketentuan</span> yang berlaku.
            </p>
            <div className="mt-10 flex justify-between items-center">
                <span className="flex items-center gap-1">
                    <i className="ri-arrow-left-s-line text-lg"></i>
                    <Link to="/" className="text-sm">Batalkan</Link>
                </span>
                <Link to="/payment" state={{ data: value }} className="text-[14px] py-[10px] px-[54px] rounded-[50px] bg-[#2A61A8] text-white text-sm">Bayar</Link>
            </div>
        </div>
    )
}

export default Order