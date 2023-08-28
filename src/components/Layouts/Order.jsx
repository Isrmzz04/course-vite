import { Link } from "react-router-dom"
import imageOrder from "../../assets/images/img-order.png"
import { toIdr } from "../utils/toIdr"
import Button from "../Elements/Button"

const Order = ({ value }) => {
    const kodeUnik = 100000
    let getDiscount = value.price - value.discount
    let amount = getDiscount - kodeUnik

    return (
        <div className="bg-white w-full shadow-sm shadow-slate-500/30 rounded-[20px] py-12 px-10">
            <h2 className="text-[18px] font-[600] text-[#131313] mb-5">Ringkasan Pesanan</h2>
            <div className="flex gap-4 overflow-hidden">
                <div className="w-1/3 bg-cover">
                    <img src={imageOrder} alt="" />
                </div>

                <div className="w-2/3 -ml-28">
                    <div>
                        <h2 className="font-semibold text-[18px]">{value.title}</h2>
                        <h3 className="font-semibold text-[15px]">{value.description}</h3>
                    </div>
                    <div className="mt-3">
                        <ul>
                            <li className="text-black/50 text-sm">Batch <span className="text-black ml-5">{value.batch}</span></li>
                            <li className="text-black/50 text-sm">Mentor <span className="text-black ml-3">{value.mentor}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <span className="font-[600]">Kode Promo</span>
                <div className="flex mt-2 -ml-2">
                    <input type="text" className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Masukan Kode Promo" />

                    <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#2A61A8] rounded-md sm:mx-2 hover:bg-[#2A61A8] focus:outline-none focus:bg-[#2A61A8]/90">
                        Terapkan
                    </button>
                </div>
            </div>
            <div className="mt-5">
                <span className="font-[600]">Metode Pembayaran</span>
                <p>Bank Transfer (verifikasi manual)-Mandiri</p>
            </div>
            <div className="mt-5">
                <span className="font-[600]">Ringkasan Pembayaran</span>
                <ul className="space-y-5 mt-3">
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
            <p className="mt-20 text-[14px]">
                Dengan menekan tombol <b>Bayar</b> kamu telah menyetujui syarat dan ketentuan yang berlaku, silahkan baca kembali <span className="text-[#1097E7] underline">Syarat & ketentuan</span> yang berlaku.
            </p>
            <div className="mt-10 flex justify-between items-center">
                <span className="flex items-center gap-1">
                    <i className="ri-arrow-left-s-line text-lg"></i>
                    <Link to="/" className="text-sm">Batalkan</Link>
                </span>
                <Button variant="bg-[#2A61A8] text-white px-16">Bayar</Button>
            </div>
        </div>
    )
}

export default Order